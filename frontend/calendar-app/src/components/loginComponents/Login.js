import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [alertMessage, setAlertMessage] = useState("")
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    
    const navigate = useNavigate();

    console.log(loginInfo);

    function handleBack(){
        navigate("/");
    }
    function handleSignUp(){
        navigate("/signup");
    }
    function handleChange(event){
        setLoginInfo(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    function handleSubmit(){
        navigate("/home");
    }

    return(
        <div className='form-container'>
            <div className='card'>
                <a onClick={handleBack}>Back</a>
                {alertMessage && <div className="alert">{alertMessage}</div>}
                <div className="card-head">
                    <h1>Login</h1>
                </div>
                <input name="email" className="box" onChange={handleChange} placeholder="E-mail address" type="text" value={loginInfo.email}/>
                <input name="password" className="box" onChange={handleChange} placeholder="Password" type="password" value={loginInfo.password}/>
                <input className="submit-btn" onClick={handleSubmit} type="submit"/>
                <p>Don't have an account?<span onClick={handleSignUp}> Sign up</span></p>
            </div> 
        </div>
    )
}