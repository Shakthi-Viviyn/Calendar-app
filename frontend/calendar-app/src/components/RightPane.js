import React, { useState } from 'react';
import '../styles/home.scss';
// import SmallCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniCalendar from './MiniCalendar';

export default function RightPane() {

    const [selectedDate, setSelectedDate] = useState("")

    function handleClick(value){
        setSelectedDate(value);
    }

    return (
        <div className="right-pane-container">
            <MiniCalendar onChange={handleClick}/>
            <h2>{selectedDate}</h2>
        </div>
    )
}