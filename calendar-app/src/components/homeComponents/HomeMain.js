import React , {useState} from 'react';
import SideBar from './SideBar';
import RightPane from './RightPane';
import CalendarPane from './CalendarPane';


export default function HomeMain(){

    const [view, setView] = React.useState('personal');

    const [selectedDate, setSelectedDate] = useState(new Date("2023-04-01"));

    function handleMiniDateChange(value){
        setSelectedDate(value);
    }

    function handleViewChange(view){
        setView(view);
    }
    
    return(
        <div className="home-container">
            <SideBar updateView={handleViewChange}/>
            <CalendarPane showDate={selectedDate} />
            <RightPane handleDateChange={handleMiniDateChange}/>
        </div>
    )
}