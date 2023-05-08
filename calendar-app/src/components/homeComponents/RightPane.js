import React, { useState } from 'react';
import '../../styles/home.scss';
// import SmallCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniCalendar from './MiniCalendar';
import TagSelector from './TagSelector';
import Members from './Members';

export default function RightPane({handleDateChange}) {

    const [selectedTags, setSelectedTags] = useState([]);

    console.log(selectedTags)

    return (
        <div className="right-pane-container">
            <MiniCalendar onChange={handleDateChange}/>
            <TagSelector setSelectedTags={setSelectedTags} selectedTags={selectedTags}/>
            <Members/>
        </div>
    )
}