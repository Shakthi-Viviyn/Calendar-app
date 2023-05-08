import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SignUp(){

    const [alertMessage, setAlertMessage] = useState("")
    const [signUpInfo, setSignUpInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        retypePassword: ""
    })

    const navigate = useNavigate();

    console.log(signUpInfo);

    function handleBack(){
        navigate("/")
    }
    function handleLogin(){
        navigate("/login")
    }
    function handleChange(event){
        setSignUpInfo(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    function handleSubmit(){
        alert(`${signUpInfo.firstName} ${signUpInfo.lastName} ${signUpInfo.email} ${signUpInfo.password} ${signUpInfo.retypePassword}`);
        
    }
    
    return(
        <div className='form-container'>
            <div className='card'>
                <a onClick={handleBack}>Back</a>
            {alertMessage && <div className="alert">{alertMessage}</div>}
                <div className="card-head">
                    <h1>Sign Up</h1>
                </div>
                <div className="nameBoxes">
                    <input name="firstName" className="box" onChange={handleChange} placeholder="First Name" type="text"/>
                    <input name="lastName" className="box" onChange={handleChange} placeholder="Last Name" type="text"/>
                </div>
                <input name="email" className="box" onChange={handleChange} placeholder="E-mail address" type="text"/>
                <input name="password" className="box" onChange={handleChange} placeholder="Password" type="password"/>
                <input name="retypePassword" className="box" onChange={handleChange} placeholder="Re-type Password" type="Password"/>
                <input className="submit-btn" onClick={handleSubmit} type="submit"/>
                <p>Already have an account?<span onClick={handleLogin}> Login</span></p>
            </div>
        </div>
    )
}