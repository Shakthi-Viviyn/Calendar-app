import React from 'react';
import { useHistory } from "react-router-dom";

export default function NavBar(){

    const history = useHistory();

    function handleSignUp(){
        history.push("/signup");
    }

    function handleLogin(){
        history.push("/login");
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