import React from 'react';
import '../styles/home.css';
import SideBarItem from './SideBarItem';


export default function SideBar(){

    return (
        <div className="sidebar-container">
            <SideBarItem hasUpdates={true} groupImage="google.jpg"/>
            <SideBarItem hasUpdates={true} groupImage="smartGuy.jpeg"/>
            <SideBarItem hasUpdates={false}/>
            <SideBarItem hasUpdates={false}/>
            <SideBarItem hasUpdates={true}/>
            <div className="sidebar-bottom">
                <hr/>
                <SideBarItem hasUpdates={false}/>
            </div>
        </div>
    );
}