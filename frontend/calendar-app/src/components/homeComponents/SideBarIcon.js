import React from 'react';


export default function SideBarIcon({hasUpdates, img, id, updateView}){

    const IconStyles = {
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    function handleClick(){
        updateView(id);
    }

    return(
        <div onClick={handleClick} className="icon" style={IconStyles}>
            {hasUpdates && <div className="status"/>}
        </div>
    )
    
}