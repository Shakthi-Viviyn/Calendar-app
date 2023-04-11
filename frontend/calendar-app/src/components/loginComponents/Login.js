import React, { useState } from 'react';

export default function Login(){

    const [alertMessage, setAlertMessage] = useState("")
    
    return(
        <div className='form-container'>
            <div className='card'>
                <a>Back</a>
                {alertMessage && <div className="alert">{alertMessage}</div>}
                <div className="card-head">
                    <h1>Sign In</h1>
                </div>
                <input name="email" className="box" placeHolder="E-mail address" type="text"/>
                <input name="password" className="box" placeHolder="Password" type="password"/>
                <input className="submit-btn" type="submit"/>
            </div>
        </div>
    )
}