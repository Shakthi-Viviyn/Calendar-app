import React , {useState} from 'react';


export default function SideBarBottom({profileImage}) {

    const [IsActive, setIsActive] = useState(false);

        
    const ProfileIconStyles = {
        backgroundImage: `url('${profileImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black"
    }

    function handleClick(){
       setIsActive(!IsActive);
    }
    

    return(
        <div className="sidebar-bottom">
            <hr className={IsActive ? "hr-show" : "hr-hidden"}/>
            <div className={"icon " + (IsActive ? "setting-show" : "setting-hidden")}/>
            <div className={"icon " + (IsActive ? "logout-show" : "logout-hidden")}/>
            <div className="icon" style={ProfileIconStyles} onClick={handleClick}/>
        </div> 
    )
}