import React, {useMemo, useState, useEffect} from 'react';
import "../../styles/home.scss";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import CalendarToolbar from './CalendarToolbar';
import EventAddForm from './EventAddForm';

const localizer = momentLocalizer(moment);

export default function CalendarPane({showDate}) {

  const [date, setDate] = useState(showDate);

  useEffect((() => {
    setDate(showDate);
    document.getElementById("date-view-btn").click();
  }),[showDate]);

  console.log(date);


  let events = [{
    title: "meeting",
    start: new Date(2023, 4, 2, 12, 45),
    end: new Date(2023, 4, 2, 14, 23)
  },
  {
      title: "meeting2",
      start: new Date(2023, 4, 2, 14, 0),
      end: new Date(2023, 4, 2, 16, 23)
  },
  {
      title: "meeting3",
      start: new Date(2023, 4, 2, 14, 0),
      end: new Date(2023, 4, 2, 18, 23)
  },
  {
      title: "meeting4",
      start: new Date(2023, 4, 2, 14, 0),
      end: new Date(2023, 4, 2, 16, 23)
  },
  {
      title: "meeting5",
      start: new Date(2023, 4, 2, 14, 0),
      end: new Date(2023, 4, 2, 16, 23)
  },
  {
      title: "meeting6",
      start: new Date(2023, 4, 2, 14, 0),
      end: new Date(2023, 4, 2, 16, 23)
  },
  {
      title: "meeting7",
      start: new Date(2023, 4, 2, 14, 0),
      end: new Date(2023, 4, 2, 16, 23)
  }];
  function handleEventClick(event) {
    alert(`Event "${event.title}" clicked!`);
      // perform actions here, such as displaying a modal or navigating to a new page
  }

  const {formats} = useMemo(
    () => ({
      formats: {
        timeGutterFormat: (date, culture, localizer) =>
          localizer.format(date, 'h a', culture),
      }
    }),
    []
  )

  const AddIconStyles = {
    backgroundImage: `url('images/icons/plus.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "lightgreen"
  }

  const onNavigate = (newDate) => setDate(newDate);

  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const handleAddClick = () => {
    setIsAddFormShown(true);
  }

  const TimeGridHeader = ({ date }) => {
    return (<div className="time-grid-header">
              <span>{moment(date).format('DD')}</span>
              {moment(date).format('ddd')}
            </div>);
  };

  return(
    <>
      <div className='big-calendar-container'>
        <Calendar
            localizer={localizer}
            events={events}
            onSelectEvent={handleEventClick}
            // startAccessor="start"
            // endAccessor="end"
            views={['week','day']}
            date={date}
            onNavigate={onNavigate}
            defaultView={'day'}
            formats={formats}
            components={{
              toolbar: CalendarToolbar,
              header: TimeGridHeader
            }}
            className='calendar-container'
            dayLayoutAlgorithm={'no-overlap'}
        />
        <button style={AddIconStyles} id="add-event-btn" onClick={handleAddClick}></button>
      </div>
      {isAddFormShown && <EventAddForm setShown={setIsAddFormShown}/>}
    </>
  )
}





































// import React from 'react';
// import "../../styles/home.scss";
// import moment from 'moment';

// export default function Calendar() {

//     const hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

//     const today = moment();
//     let thisWeekDays = [];
//     let thisWeekDates = [];
    
//     for (let i = 0; i < 7; i++) {
//         thisWeekDays.push(today.clone().add(i, 'days').format("ddd"));
//         thisWeekDates.push(today.clone().add(i, 'days').date());
//     }

//     let daysElements = thisWeekDays.map((day, index) => {
//         return <th key={index}>{day}</th>;
//     })
//     let datesElements = thisWeekDates.map((date, index) => {
//         return <td key={index}>{date}</td>;
//     })
//     let hoursElements = hours.map((hour, index) => {
//         return <th key={index}>{hour}</th>;
//     })

//     return (
//         <div className="calendar-container">
//             <table className="calendar">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         {daysElements}
//                     </tr>
//                     <tr>
//                         <th></th>
//                         {datesElements}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                       <td>12 am</td>
//                       <td style={{backgroundColor: "red", borderRadius: "50px"}}>Hello world</td>
//                       <td></td>
//                     </tr>
//                     <tr>
//                       <td>1 am</td>
//                       <td style={{backgroundColor: "red", borderRadius: "50px"}}></td>
//                       <td></td>
//                     </tr>
//                     <tr>
//                       <td>2 am</td>
//                       <td style={{backgroundColor: "red", borderRadius: "50px"}}></td>
//                       <td></td>
//                     </tr>
//                     <tr>
//                       <td>3 am</td>
//                       <td></td>
//                       <td style={{backgroundColor: "yellow"}}>Beo</td>
//                     </tr>
//                     <tr>
//                     <td>4 am</td>
//                     <td></td>
//                       <td style={{backgroundColor: "yellow"}}></td>
//                     </tr>
//                     <tr>
//                     <td>5 am</td>
//                     </tr>
//                     <tr>
//                     <td>6 am</td>
//                     </tr>
//                     <tr>
//                     <td>7 am</td>
//                     </tr>
//                     <tr>
//                     <td>8 am</td>
//                     </tr>
//                     <tr>
//                     <td>9 am</td>
//                     </tr>
//                     <tr>
//                     <td>10 am</td>
//                     </tr>
//                     <tr>
//                     <td>11 am</td>
//                     </tr>
//                     <tr>
//                     <td>12 pm</td>
//                     </tr>
//                     <tr>
//                     <td>1 pm</td>
//                     </tr>
//                     <tr>
//                     <td>2 pm</td>
//                     </tr>
//                     <tr>
//                     <td>3 pm</td>
//                     </tr>
//                     <tr>
//                     <td>4 pm</td>
//                     </tr>
//                     <tr>
//                     <td>5 pm</td>
//                     </tr>
//                     <tr>
//                     <td>6 pm</td>
//                     </tr>
//                     <tr>
//                     <td>7 pm</td>
//                     </tr>
//                     <tr>
//                     <td>8 pm</td>
//                     </tr>
//                     <tr>
//                     <td>9 pm</td>
//                     </tr>
//                     <tr>
//                     <td>10 pm</td>
//                     </tr>
//                     <tr>
//                     <td>11 pm</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }
