let CronJob = require('cron').CronJob;

const fetchGithub = require("./tasks/fetch-github");


// fetch github jobs every minute.
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');

