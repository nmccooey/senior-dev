let fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  let resultCount = 1, onPage = 0;
  const allJobs = [];

  while(resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`got ${resultCount} jobs`);
    onPage++;
  }

  // filter algorithm for senior jobs
  const srJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("lead") ||
      jobTitle.includes("principle") ||
      jobTitle.includes("architect") ||
      jobTitle.includes("manager")
    ) {
      return true;
    }
    return false;
  });

  console.log("Senior Jobs:", srJobs.length);

  // Set in redis.
  const success = await setAsync("github", JSON.stringify(srJobs));

  console.log(success);
}

module.exports = fetchGithub;