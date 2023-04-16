import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SideBarBottom({profileImage}) {

    const [IsActive, setIsActive] = useState(false);

    const navigate = useNavigate();
        
    const ProfileIconStyles = {
        backgroundImage: `url('${profileImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black"
    }

    const LogoutIconStyles = {
        backgroundImage: `url('images/icons/logout.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    const SettingsIconStyles = {
        backgroundImage: `url('images/icons/settings.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    function handleClick(){
       setIsActive(!IsActive);
    }

    function handleLogout(){
        navigate("/");
    }

    function handleSettings(){
        navigate("/settings");
    }
    
    return(
        <div className="sidebar-bottom">
            <hr className={IsActive ? "hr-show" : "hr-hidden"}/>
            <div onClick={handleLogout} style={LogoutIconStyles} className={"icon " + (IsActive ? "setting-show" : "setting-hidden")}/>
            <div onClick={handleSettings} style={SettingsIconStyles} className={"icon " + (IsActive ? "logout-show" : "logout-hidden")}/>
            <div className="icon" style={ProfileIconStyles} onClick={handleClick}/>
        </div> 
    )
}