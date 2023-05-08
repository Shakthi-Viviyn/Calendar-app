import React from "react";

export default function TagSelector({selectedTags, setSelectedTags}) {

    const groupTags = [
        {
            name: "Work",
            color: "red"
        },
        {
            name: "School",
            color: "blue"
        },
        {
            name: "Friends",
            color: "green"
        },
        {
            name: "Family",
            color: "pink"
        },
        {
            name: "Hello",
            color: "purple"
        }
    ]

    function handleClick(e){
        if (selectedTags.includes(e.target.id)){
            setSelectedTags((prevState) => prevState.filter((tag) => tag !== e.target.id));
        }else{
            setSelectedTags((prevState) => [...prevState, e.target.id]);
        }
    }

    const tagElements = groupTags.map((tag, index) => {

        const selectedStyle = {
            backgroundColor: tag.color,
            border: "none",
            boxSizing: "border-box",
            color: "white"
        }
        const unselectedStyle = {
            backgroundColor: "white",
            border: `2px solid ${tag.color}`,
            boxSizing: "border-box"
        }

        return (
            <div onClick={handleClick} id={tag.name} className="tag-container" style={selectedTags.includes(tag.name) ? selectedStyle : unselectedStyle} key={index}>
                <p id={tag.name}>{tag.name}</p>
            </div>
        )
    })
    
    return (
        <div className="tag-selector-container">
            <div className="tags-group">
                {tagElements}
            </div>
        </div>
    )
}