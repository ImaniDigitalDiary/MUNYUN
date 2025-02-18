import { useState } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
// const events = [{ title: "Event", start: new Date(), end: new Date() }];

const MyCalendar = () => {
  const [events, setEvents] = useState([
    { title: 'Event', start: new Date(), end: new Date()}
  ])

  // create an event
  const handleSelectSlot = ({ start, end }) => {
    const title = prompt('Enter event title:')
    if (title) {
      events([...events, { title, start, end}])
    }
  }

  // fxn to style events
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#f7d6e7',
      borderRadius: '5px',
      color: 'white',
      border: 'none',
      padding: '5px'
    }
    return { style }
  }
  return (
    <Calendar 
    localizer={localizer} 
    events={events} 
    startAccessor="start" 
    endAccessor="end" 
    selectable
    onSelectSlot={handleSelectSlot} 
    // eventPropGetter={eventStyleGetter}
    style={{ height: 500 }} />
)
}

  

export default MyCalendar;
