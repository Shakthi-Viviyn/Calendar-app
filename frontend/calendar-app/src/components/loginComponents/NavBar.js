import React from 'react';

export default function NavBar(){

    return(
        <nav className="nav-bar">
            <h4>Calendar App</h4>
            <div className="action-buttons-container">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}