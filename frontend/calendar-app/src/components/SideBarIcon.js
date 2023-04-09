import React from 'react';
import '../styles/home.scss';

export default function SideBarIcon({hasUpdates,groupImage}){

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