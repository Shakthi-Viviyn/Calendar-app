import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NavBar(){

    const navigate = useNavigate();

    function handleSignUp(){
        navigate("/signup");
    }

    function handleLogin(){
        navigate("/login");
    }


    return(
        <nav className="nav-bar">
            <h4>Calendar App</h4>
            <div className="action-buttons-container">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </nav>
    )
}