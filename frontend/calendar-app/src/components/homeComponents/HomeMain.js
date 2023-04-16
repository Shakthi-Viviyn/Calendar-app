import React from 'react';
import SideBar from './SideBar';
import RightPane from './RightPane';
import CalendarPane from './CalendarPane';


export default function HomeMain(){

    const [view, setView] = React.useState('personal');

    console.log(view);

    function handleViewChange(view){
        setView(view);
    }
    
    return(
        <div className="home-container">
            <SideBar updateView={handleViewChange}/>
            <CalendarPane/>
            <RightPane/>
        </div>
    )
}