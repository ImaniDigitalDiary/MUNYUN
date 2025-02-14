import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const MyCalendar = () => {
    const handleDateClick = (arg) => {
        alert(`Date clicked: ${arg.dateStr}`)
    }

    return (
        <div className="calendarCont">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                dateClick={handleDateClick}
                height='400px' // adjust height
                events={[
                    { title: 'Meeting', date: '2025-02-15' },
                    { title: 'Lunch', date: '2025-02-20' },
                ]}
            />
        </div>
    )
}

export default MyCalendar


