import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FormOne from './Components/Form';
import FormTwo from './Components/FormTwo';
import FormThree from './Components/FormThree';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: "300px",
        margin: "auto"
    },
}));

function getSteps() {
    return ['Personal Info', 'Extra Details', 'Final Review'];
}

function getStepContent(step: number, handleNext: () => void, handleBack: () => void, formValue: any, setFormValue: any) {
    switch (step) {
        case 0:
            return <FormOne handleNext={handleNext} setFormValue={setFormValue} preValue={formValue} />;
        case 1:
            return <FormTwo handleNext={handleNext} handleBack={handleBack} setFormValue={setFormValue} preValue={formValue} />;
        case 2:
            return <FormThree  values={formValue} handleBack={handleBack} />;
        default:
            return 'Unknown step';
    }
}

export default function StepperComponent() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValue, setFormValue] = useState({})
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label) => {
                    console.log(label)
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                        })}
            </Stepper>
            <div className={classes.instructions}>
                {getStepContent(activeStep, handleNext, handleBack, formValue, setFormValue)}
            </div>           
                      
                   
        </div>
    );
}
