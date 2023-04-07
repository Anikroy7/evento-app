import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { Stack } from "@mui/system";
import * as React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/utils/Loading";
import { useGetHomeByIdQuery } from "../../features/api/homesApi";
import ReviewHouse from "./ReviewHouse";
import WhosComming from "./WhosComming";
const steps = ["Reviews House roles","Confirm and pay"];

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped); 
    
  };

  
  const { homeId } = useParams()
  const { data, isLoading } = useGetHomeByIdQuery(homeId);
  if (isLoading) {
    return <Loading />;
  }

  const {  attributes } = data.data;

  return (
    <Stack  maxWidth={"lg"} marginX={"auto"}>
      <Stepper sx={{ width: "60%", mt: 5}} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box>
        {activeStep===0 && <ReviewHouse attributes={attributes} handleNext={handleNext}/>}
        {activeStep===1 && <WhosComming attributes={attributes} handleNext={handleNext}/>}
      </Box>
    </Stack>
  );
};

export default Checkout;
