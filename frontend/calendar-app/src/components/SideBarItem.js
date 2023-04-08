import React from 'react';
import '../styles/home.css';

export default function SideBarItem({hasUpdates,groupImage}){

    const IconStyles = {
        backgroundImage: `url('${groupImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return(
        <div className="icon" style={IconStyles}>
            {hasUpdates && <div className="status"/>}
        </div>
    )
    
}