import React , {useState} from 'react';
import moment from 'moment'

export default function MiniCalendar({onChange, eventDetails}){

        eventDetails = [
            {
                date: 1,
                color: "red"
            },
            {
                date: 5,
                color: "green"
            },
            {
                date: 30,
                color: "blue"
            },
            {
                date: 17,
                color: "red"
            },
            {
                date: 16,
                color: "green"
            }
        ]

        let eventDates = eventDetails.map((eventObj => (eventObj.date)));
        
        const [calendarDate,setCalendarDate] = useState(moment());

        let weekdayShort = moment.weekdaysShort();
        let weekdayShortElements = weekdayShort.map((day)=>(
            <th key={day}>
                {day}
            </th>
        ));

        let currentDate = calendarDate;
        
        //Finds the day of first date in month
        let firstDay = moment(currentDate).startOf("month").format("d"); 
        
        //Array to hold all the date <td> elements
        let days = []
        
        //Adds blanks cells for first row before the first day of the month is reached
        for (let i=0;i < firstDay; i++){
            days.push(<td key={"s" + i}>{""}</td>);
        }
        //Adds all the dates in the month
        for (let i=1; i <= currentDate.daysInMonth(); i++){
            days.push(<td key={i} id={i} onClick={handleClick} className="date-cell">{i}{eventDates.includes(i) && <span style={{color: eventDetails[eventDates.indexOf(i)].color}}>.</span>}</td>);
        }
        //Fills the remainder of last row with blank cells 
        for (let i = moment(currentDate).endOf("month").format("d"); i < 6 ; i++){
            days.push(<td key={"e" + i}>{""}</td>);
        }

        //Breaks dates in sets of 7 (one week)
        let setsOfSeven = []

        for (let i = 0; i < days.length; i += 7) {
            setsOfSeven.push(days.slice(i, i + 7));
        }

        //Appends <tr> elements at start and end of rows
        let dayRows = setsOfSeven.map((row) => (<tr key={setsOfSeven.indexOf(row)}>{row}</tr>))

        //Function to update the state of parent when a date is clicked
        function handleClick(e){
            let selectedDate = calendarDate.clone().set("date", e.target.id) 
            onChange(selectedDate.format("YYYY-MM-DD"));
        }

        //Functions to increase and decrease month when buttons are clicked
        function incrementMonth(){
            setCalendarDate((prevDate)=>(moment(prevDate).add(1,"months")))
        }

        function decrementMonth(){
            setCalendarDate((prevDate)=>(moment(prevDate).subtract(1,"months")))
        }

    return (
        <div  className="mini-calendar-container">
            <div className="month-switcher-container">
                <h3>{currentDate.format("MMMM") + " " + currentDate.format("YYYY")}</h3>
                <div className="buttons-container">
                    <img onClick={decrementMonth} src="images/icons/backward-arrow.png" className="buttons" alt="backward"/>
                    <img onClick={incrementMonth} src="images/icons/forward-arrow.png" className="buttons" alt="forward"/>
                </div>
               
            </div>
            <table className="mini-calendar">
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