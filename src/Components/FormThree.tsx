import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { Button } from '@material-ui/core';
interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
interface Props {
  
    values: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        Qualification: string,
        Religion: string,
        City: string,
        Nationality: string,
        Age: number,
        date: string
    },
    handleBack:()=>void
}
const FormThree: React.FC<Props> = ({ values, handleBack }) => {
    console.log(values);
    const [display, setDisplay] = useState("flex");
     //const [initialValues] = useState<FormValues>({ firstName: '', lastName: '', email: '', password: '' })
    return (
        <div id="form3">
            <h1>FINAL REVIEW</h1>
            <div className="data">
                <h3 className="keys">Name :</h3>
                <h3>{values.firstName}</h3>
            </div>
            <div className="data">
                <h3 className="keys">Father Name :</h3>
                <h3>{values.lastName}</h3>
            </div>
            <div className="data">
                <h3 className="keys">E-mail Address :</h3>
                <h3>{values.email}</h3>
            </div>
            <div className="data">
                <h3 className="keys">Date Of Birth :</h3>
                <h3>{values.date}</h3>
            </div>
            <div className="data">
                <h3 className="keys">Age :</h3>
                <h3>{values.Age}</h3>
            </div>
            <div className="data">
                <h3 className="keys">Qualification :</h3>
                <h3>{values.Qualification}</h3>
            </div>

            <div className="data">
                <h3 className="keys">Nationality :</h3>
                <h3>{values.Nationality}</h3>
            </div>
            <div className="data">
                <h3 className="keys">City/State :</h3>
                <h3>{values.City}</h3>
            </div>
            <div className="data">
                <h3 className="keys">Religion :</h3>
                <h3>{values.Religion}</h3>
            </div>
            <Button onClick={() => handleBack()} className="submit" variant="contained" style={{ display:display }}>Back</Button>
            <Button type="submit" className="submit" variant="contained" onClick={() => Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Save it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Saved',
                        'Your file has been successfully Saved.',
                        'success'
                    )
                    setDisplay("none");
                }
            }) }>Next</Button>
        </div>

    )
}
export default FormThree;