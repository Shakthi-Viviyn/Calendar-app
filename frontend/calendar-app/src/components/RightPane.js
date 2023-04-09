import React from 'react';
import '../styles/home.scss';
import SmallCalendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export default function RightPane() {
    return (
        <div className="right-pane-container">
            <SmallCalendar/>
        </div>
    )
}