import React, { useState } from 'react';
import '../../styles/home.scss';
// import SmallCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniCalendar from './MiniCalendar';

export default function RightPane({handleDateChange}) {

    return (
        <div className="right-pane-container">
            <MiniCalendar onChange={handleDateChange}/>
        </div>
    )
}