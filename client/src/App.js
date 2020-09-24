import React from 'react';
import './App.css';
import Jobs from './Jobs';

const mockJobs = [
  { title: 'Lead Developer', company: 'Google' },
  { title: 'Senior JS Developer', company: 'Facebook' },
  { title: 'Principle Developer', company: 'Amazon' },
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
