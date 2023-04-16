import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AddGroup(){

    console.log("Hello world")

    const navigate = useNavigate();

    function handleClick(e) {
        navigate(`/home`);
    }

    return(
        <div className="group-add-page-container">
            <div className="close-btn-container">
                <button onClick={handleClick} style={{backgroundImage: `url('images/icons/close.png')`}}/>
            </div>
            <Outlet/>
        </div>
    )
}