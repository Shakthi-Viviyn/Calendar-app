import React from 'react';
import '../../styles/home.scss';
import SideBarIcon from './sideBarComponents/SideBarIcon';
import SideBarBottom from './sideBarComponents/SideBarBottom';
import { useNavigate } from 'react-router-dom';

export default function SideBar({updateView}) {

    const navigate = useNavigate();

    let groupObjects = [
        {
            name: "Group 1",
            id: "1",
            hasUpdates: true,
            img: "google.jpg"
        },
        {
            name: "Group 2",
            id: "2",
            hasUpdates: false,
            img: "smartGuy.jpeg"
        },
        {
            name: "Group 3",
            id: "3",
            hasUpdates: false,
            img: ""
        },
        {
            name: "Group 4",
            id: "4",
            hasUpdates: false,
            img: ""
        }
    ]
    /*
        Group props:
            name: string
            id: string]
            hasUpdates: boolean
            img: string
    */

    let GroupIcons = groupObjects.map((group) => {
        return(
            <SideBarIcon updateView={updateView} hasUpdates={group.hasUpdates} id={group.id} img={group.img} key={group.id} name={group.name}/>
        )
    })

    const groupLimit = 5;

    const IconStyles = {
        backgroundImage: `url('images/icons/plus.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    function handleClick(){
        navigate("/add");
    }
    

    return (
        <div className="sidebar-container">
            <SideBarIcon updateView={updateView} id={"personal"} img="images/icons/home.svg" key={"personal"} name={"personal"}/>
            {GroupIcons}
            {(GroupIcons.length < groupLimit) &&  <div onClick={handleClick} className="icon" style={IconStyles}/>}

            <SideBarBottom/>
        </div>
    );
}
