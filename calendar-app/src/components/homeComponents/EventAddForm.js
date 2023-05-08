import React from "react";

export default function EventAddForm({ setShown }) {

    const handleClick = () => {
        setShown(false);
    }
    //eslint-disable-next-line
    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
        location: "",
        date: "",
        time: ""
    })

    const closeBtnStyles = {
        backgroundImage: `url('images/icons/close.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    console.log(formData)

    return (
        <div className="add-event-form-container">
            <div className="close-btn-container">
                <button onClick={handleClick} style={closeBtnStyles}/>
            </div>
            <form>
                <input type="text" name="name" onChange={handleChange} placeholder="Event name" required/>
                <div className="input-icon-group">
                    <img src="images/icons/event-add/description.svg" alt=""/>
                    <textarea name="description" onChange={handleChange} placeholder="Event description" required/>
                </div>
                <div className="input-icon-group">
                    <img src="images/icons/event-add/location.svg" alt=""/>
                    <input type="text" onChange={handleChange} name="location" placeholder="Location" required/>
                </div>
                <div className="date-time">
                    <input type="date" onChange={handleChange} name="date" required/>
                    <input type="time" onChange={handleChange} name="time" required/>  
                </div>
                <input type="submit"/>
            </form>
        </div>
 
    )
}