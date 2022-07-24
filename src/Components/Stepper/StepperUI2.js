import * as React from 'react';
import { Typography, TextField, Box, Button, Link, StepLabel, Step, Stepper, Paper, Container} from "@mui/material";
import ResetPassword from "../Forget/ResetPassword.js";
import EnterEmail from "../Forget/EnterEmail.js";
import VerifyEmail from "../Forget/VerifyEmail.js";


const steps = ['Enter Email', 'Verify email', 'Reset Password'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EnterEmail  />;
    case 1:
      return <VerifyEmail/>;
    case 2:
      return <ResetPassword />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (  
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Reset Password
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                 Password is Reseted
                </Typography>
                <Typography variant="subtitle1">
                  Your will be redirected to login page.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Reset' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>

  );
}