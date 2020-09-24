# Senior Level Software Job Board

This is a web app that shows only senior level software positions. Job data is pulled from the Github Jobs public API, is filtered, and then stored into Redis. The job data is fetched with Node Cron every 60 seconds for up to date data. Express is used to GET data from Redis. The front end is built with React and Material UI.
