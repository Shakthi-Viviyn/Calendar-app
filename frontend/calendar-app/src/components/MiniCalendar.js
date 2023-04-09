import React from 'react';
import moment from 'moment'

export default function MiniCalendar({onChange}){

        let weekdayShort = moment.weekdaysShort();
        let weekdayShortElements = weekdayShort.map((day)=>(
            <th key={day} className="week-day">
                {day}
            </th>
        ));

        let currentDate = moment().add(1,"year").add(2,"days");

        let firstDay = moment(currentDate).startOf("month").format("d"); 

        let days = []

        for (let i=0;i < firstDay; i++){
            days.push(<td>{""}</td>);
        }
        for (let i=1; i <= currentDate.daysInMonth(); i++){
            days.push(<td id={i} onClick={handleClick}>{i}</td>);
        }
        for (let i = moment(currentDate).endOf("month").format("d"); i < 6 ; i++){
            days.push(<td>{""}</td>);
        }

        let setsOfSeven = []

        for (let i = 0; i < days.length; i += 7) {
            setsOfSeven.push(days.slice(i, i + 7));
        }

        let dayRows = setsOfSeven.map((row) => (<tr>{row}</tr>))

        function handleClick(e){
            onChange(e.target.id);
        }

    return (
        <div>
            <table>
                <thead>
                    <tr>{weekdayShortElements}</tr>
                </thead>
                <tbody>
                    {dayRows}
                </tbody>
            </table>
        </div>
       
       
    )
}