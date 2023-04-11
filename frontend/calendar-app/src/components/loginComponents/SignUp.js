import React, { useState } from 'react';

export default function SignUp(){

    const [alertMessage, setAlertMessage] = useState("")
    
    return(
        <div className='form-container'>
            <div className='card'>
                <a>Back</a>
            {alertMessage && <div className="alert">{alertMessage}</div>}
                <div className="card-head">
                    <h1>Sign Up</h1>
                </div>
                <div className="nameBoxes">
                    <input name="firstName" className="box" placeHolder="First Name" type="text"/>
                    <input name="lastName" className="box" placeHolder="Last Name" type="text"/>
                </div>
                <input name="email" className="box" placeHolder="E-mail address" type="text"/>
                <input name="password" className="box" placeHolder="Password" type="password"/>
                <input name="retypePassword" className="box" placeHolder="Re-type Password" type="Password"/>
                <input className="submit-btn" type="submit"/>
            </div>
        </div>
    )
}