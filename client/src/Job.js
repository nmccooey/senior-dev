import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
const ONE_DAY_MS = 24*3600*1000;

// returns a date like Sat Feb 24
function getMDY(ts) {
  return ts.toDateString().split(' ').slice(0,3).join(' ')
}

function makeDate(timestamp) {
  const date = new Date(timestamp);
  const dateStr =  getMDY(date);
  const todayStr = getMDY(new Date());
  const yesterdayStr = getMDY(new Date(Date.now() - ONE_DAY_MS));
  if (dateStr === todayStr) {
      return 'today';
  } else if (dateStr === yesterdayStr) {
      return 'yesterday';
  } else {
      return dateStr;
  }
}

export default function Job({job, onClick}) {
    
  return (
    <Paper onClick={onClick} className='job'>
      <div className="flex-align-mid">
        <div className="job-title-location">
          <Typography variant='h6'>{job.title}</Typography>
          <Typography variant='h5'>{job.company}</Typography>
          <Typography>{job.location}</Typography>
        </div>
      </div>
      <div className="flex-align-mid">
        <Typography>{makeDate(job.created_at)}</Typography>
      </div>
    </Paper>
  )
}