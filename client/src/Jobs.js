import React from 'react';
import Job from './Job';
import Typography from '@material-ui/core/Typography';

export default function Jobs({jobs}) {
  return (
    <div className={'jobs'}>
      
      <Typography className={'app-title'} varient='h1' color='primary'>
        Senior Level Software Jobs
      </Typography>
      
      {
        jobs.map(
          job => <Job job={job} />
        )
      }
    </div>
  );
}