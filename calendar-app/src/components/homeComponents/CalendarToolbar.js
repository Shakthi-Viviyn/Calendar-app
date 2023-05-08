import React from 'react';
// import { Toolbar } from 'react-big-calendar';

export default function CalendarToolbar({view, onView, onNavigate, currentDate, label}){

    return(
        <div className='calendar-toolbar'>
            <div>
                <img onClick={() => onNavigate('PREV')} src="images/icons/backward-arrow.png" className="navigate-button mr" alt="backward"/>
                <img onClick={() => onNavigate('NEXT')} src="images/icons/forward-arrow.png" className="navigate-button" alt="forward"/>
            </div>
            <h2>{label}</h2>
            <div className="views-button-container">
                <button id="date-view-btn" className={"view-button" + (view === 'day' ? ' active' : '')} onClick={() => onView('day')}>Day</button>
                <button className={"ml view-button" + (view === 'week' ? ' active' : '')} onClick={() => onView('week')}>Week</button>
            </div>
        </div>

    )
}