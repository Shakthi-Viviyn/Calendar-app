import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateForm() {

    const navigate = useNavigate();

    const [groupData, setGroupData] = React.useState({
        groupName: "",
        groupDescription: "",
    });

    console.log(groupData);

    function handleClick(e) {
        alert(`${groupData.groupName} - ${groupData.groupDescription}`);
        navigate(`/home`);
    }

    function handleChange(e) {
        setGroupData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="sub-container group-form">
            <input name="groupName" onChange={handleChange} className="box" type="text" placeholder="Group Name" value={groupData.groupName}/>
            <input name="groupDescription" onChange={handleChange} className="box" type="text" placeholder="Group Description" value={groupData.groupDescription}/>
            <input className="submit-btn" onClick={handleClick} type="submit" value="Join" />
            <Link id="link" to="/add/join">Join a group instead?</Link>
        </div>
    )
}