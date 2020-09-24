const { generateKeyPairSync } = require('crypto');
const express = require('express')
const app = express()
const port = 3001;
 
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

// jobs route
app.get('/jobs', async function (req, res) {
   const jobs = await getAsync("github");
   console.log(JSON.parse(jobs).length);
  
  return res.send(jobs);
})
 
app.listen(port, () => console.log("Listening on 3001"));