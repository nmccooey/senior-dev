import React from 'react';

export default function Job({job}) {
  return (
    <div className={'job'}>
      <p>{job.title}</p>
      <p>{job.company}</p>
    </div>
  );
}