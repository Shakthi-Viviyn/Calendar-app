import React from 'react';
import '../styles/home.scss';
import SideBarIcon from './SideBarIcon';
import SideBarBottom from './SideBarBottom';

export default function SideBar(){

    return (
        <div className="sidebar-container">
            <SideBarIcon hasUpdates={true} groupImage="google.jpg"/>
            <SideBarIcon hasUpdates={true} groupImage="smartGuy.jpeg"/>
            <SideBarIcon hasUpdates={false}/>
            <SideBarIcon hasUpdates={false}/>
            <SideBarIcon hasUpdates={true}/>
            <SideBarBottom/>
        </div>
    );
}