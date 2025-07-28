import React, { useState, useRef }  from 'react'

// date input
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { FaCalendarAlt, FaTimes } from 'react-icons/fa'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function DateCalender() {
    // Book Date input - useState hook
    const [range, setRange] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ])

    const [showCalendar, setShowCalendar] = useState(false)
    return (
        <div className='dateCalComp'>
        <label htmlFor="dates" className='datesHeading'>
            Dates
        </label>
        <div className='relative inline-block text-sm'>
            
            {/* DATE INPUT BOX W/ CALENDAR ICON*/}
            <div id='dateInput'
                onClick={() => setShowCalendar(true)}
                className='flex items-center justify-between gap-2 cursor-pointer px-2 py-2 bg-white text-gray-700 w-64'
            >
                <span className='datePlaceholder'>
                    {`${format(range[0].startDate, 'MMM dd')} - ${format(range[0].endDate, 'MMM dd')}`}
                    <FaCalendarAlt className='calendarIcon text-blue-600'  />  
                </span>
                 
            </div>

            {/* CALENDAR MODAL*/}
            {showCalendar && (
                <div className='absolute mt-2 z-50 shadow-lg bg-white border border-gray-300 p-4 rounded-md'>
                    {/* CLOSE BUTTON */}
                    <div className='flex justify-end mb-2'>
                        <button
                            onClick={() => setShowCalendar(false)}
                            className='text-gray-500 hover:text-blue-600 text-lg'
                        >
                            <FaTimes />
                        </button>
                    </div>


                    <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    locale={enUS}
                    months={2}
                    direction='horizontal'
                    />
                </div>
            )}
        </div>
        </div>
        
    )
}

export default DateCalender
