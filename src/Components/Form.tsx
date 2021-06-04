import Rpeact, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { DatePicker, Space } from 'antd';

interface Props {
    handleNext: () => void,
    setFormValue: any,
    preValue:null[]
}
const FormOne: React.FC<Props> = ({ handleNext, setFormValue, preValue }) => {

    return (
        <div className="form">
            <h1>Sign Up</h1>
            <Formik
                initialValues={preValue}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    date: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email()
                        .required('Required'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required')
                })}
                onSubmit={(values) => {
                    console.log(values);
                    console.log(preValue);
                    setFormValue({ ...preValue, ...values }) 
                    handleNext();
            }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <span className="error"><ErrorMessage name="firstName" className="error" /></span>
                    <Field id="firstName" name="firstName" placeholder="First Name" type="text" />
                    

                    <label htmlFor="lastName">Last Name</label>
                    <span className="error"><ErrorMessage name="lastName" className="error" /></span>
                    <Field id="lastName" name="lastName" placeholder="Father Name" type="text" />

                    
                    <label htmlFor="email">Email</label>
                    <span className="error"> <ErrorMessage name="email" className="error" /></span>
                    <Field
                        id="email"
                        name="email"
                        placeholder="abc@.gmail"
                        type="email"
                    />
                    
                    <label htmlFor="date">Date Of Birth</label>
                    <span className="error"><ErrorMessage name="date" className="error" /></span>
                    <Field id="date" name="date" type="date" />


                    <label htmlFor="password">Password</label>
                    <span className="error"><ErrorMessage name="password" /></span>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                   
                    <Button type="submit" className="submit" variant="contained">Next</Button>
                </Form>
            </Formik>
        </div>
        
        )
}
export default FormOne;