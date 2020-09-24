import React from 'react'
import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal'
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

let title = "{ Senior Dev }";

export default function Jobs({jobs}) {

  React.useEffect(() => {
    const welcomeItem= document.querySelectorAll('.welcome-item');
    let delay = 0;
    welcomeItem.forEach(item => {
        setTimeout(() => item.style.opacity = 1, delay);
        delay += 500;
    });
  }, []);

  // modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});
  function handleClickOpen() {
    setOpen(true);
  }  
  function handleClose() {
    setOpen(false);
  }

  // pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 10);
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep * 10, (activeStep * 10) + 10);

  function scrollToTop () {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    scrollToTop();
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    scrollToTop();
  }    

  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography variant="h4" component="h1" className="app-title">
          {title}
      </Typography>
      <Typography variant="h6" component="h2" className="app-slogan">
          Bringing You Senior Level Software Jobs.
      </Typography>
      <Typography variant="h6" component="h3">
          Found {numJobs} Jobs
      </Typography>
      {
        jobsOnPage.map(
          (job, i) => <Job key={i} job={job} onClick={() => {
            handleClickOpen();
            selectJob(job)
          }} />
        )
      }
      <div>
          Page {activeStep + 1} of {numPages}
      </div>
      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
          Next
          <KeyboardArrowRightIcon />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeftIcon />
          Back
          </Button>
        }
      />

    </div>
  )
}