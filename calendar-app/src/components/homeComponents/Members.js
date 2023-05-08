import React from "react";

export default function Members() {

    let members = ["shakthi", "viviyn", "helo", "world", "hello", "world","hello","shakthi", "viviyn", "helo", "world", "hello"];

    const iconElements = members.map((member, index) => {
        const style = {
            zIndex: (members.length - (index+1)),
        }
        return <div key={index} className="circle" style={style}/>;
    })
    
    return (
        <div className="members-icons-container">
            <div className="title-container">
                <h3 className="title">Members</h3>
            </div>
            <div className="members-icons">
                {iconElements}
            </div> 
        </div>

    )
}