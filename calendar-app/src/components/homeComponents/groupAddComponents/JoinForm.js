import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function JoinForm() {

    const navigate = useNavigate();

    const [groupCode, setGroupCode] = React.useState("");

    function handleClick(e) {
        alert(groupCode);
        navigate(`/home`);
    }

    function handleChange(e) {
        setGroupCode(e.target.value);
    }

    return (
        <div className="sub-container group-form">
            <input onChange={handleChange} className="box" type="text" placeholder="Group Code" value={groupCode}/>
            <input className="submit-btn" onClick={handleClick} type="submit" value="Join" />
            <Link id="link" to="/add/create">Create a group instead?</Link>
        </div>
    )
}