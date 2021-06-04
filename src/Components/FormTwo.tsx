import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';

interface FormValues {
    Qualification: string,
    Nationality: string,
    City: string,
    Religion: string
}
interface Props {
    handleNext: () => void,
    handleBack: () => void,
    setFormValue: any,
    preValue: {
        firstName: string,
        lastName: string,
        email: string,
        password: string
    }
}
const FormTwo: React.FC<Props> = ({ handleNext, handleBack, setFormValue, preValue }) => {

    return (
        <div className="form">
            <h1>Sign Up</h1>
            <Formik
                initialValues={preValue}
                validationSchema={Yup.object({
                    Qualification: Yup.string()
                        .required('Required'),
                    Nationality: Yup.string()
                        .required('Required'),
                    City: Yup.string()
                        .required('Required'),
                    Religion: Yup.string()
                        .required('Required'),
                    Age: Yup.number()
                        .min(10,"should be greater than 10")
                        .required("required")
                })}
                onSubmit={(values) => {
                    console.log(values);
                    console.log(preValue);
                    setFormValue({ ...preValue, ...values })
                    handleNext();
                }}
            >
                <Form>
                    <label htmlFor="Age">Age: </label>
                   <span className="error"><ErrorMessage name="Age" /></span>
                    <Field id="Age" name="Age" type="number" />

                    <label htmlFor="Qualification">Qualification</label>
                    <span className="error"><ErrorMessage name="Qualification" /></span>
                    <Field id="Qualification" name="Qualification" as="select" >
                        <option value=""></option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="UnderGraduate">UnderGraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="PostGraduate">PostGraduate</option>
                        
                    </Field>
                   

                    <label htmlFor="Nationality">Nationality</label>
                    <span className="error"><ErrorMessage name="Nationality" /></span>
                    <Field id="Nationality" name="Nationality" type="text" />
                    

                    <label htmlFor="City">City</label>
                    <span className="error"><ErrorMessage name="City" /></span>
                    <Field
                        id="City"
                        name="City"
                        type="City"
                    />
                 
                    <label htmlFor="Religion">Religion</label>
                    <span className="error"><ErrorMessage name="Religion" /></span>
                    <Field id="Religion" name="Religion" as="select" >
                        <option value=""></option>
                        <option value="Islam">Islam</option>
                        <option value="Christian">Christian</option>
                        <option value="Hindus">Hindus</option>
                        <option value="Other">Other</option>

                    </Field>
                  

                    <Button onClick={() => handleBack()} className="submit" variant="contained">Back</Button>
                    <Button type="submit" className="submit" variant="contained">Next</Button>
                </Form>
            </Formik>
        </div>

    )
}
export default FormTwo;