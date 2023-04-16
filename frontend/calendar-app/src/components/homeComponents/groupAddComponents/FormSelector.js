import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function FormSelector() {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate(`/add/${e.target.id}`);
    }

    return (
        <div className="sub-container form-selector">
            <button id="join" onClick={handleClick}>Join a group</button>
            <p>or</p>
            <button id="create" onClick={handleClick}>Create a group</button>
        </div>
    )
}