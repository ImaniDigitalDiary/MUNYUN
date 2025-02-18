import { create } from 'zustand'

export const useEventTracking = create((set) => ({
    events: [],
    setEvents: (events) => set({events}),
    // passing new events into function to create event for db
    createEvent: async (newEvent) => {
        if (!newEvent.title || !newEvent.start || !newEvent.end || !newEvent.color) {
            return {success: false, message: 'Please fill in all the required information'}
        }
        const res = await fetch('http://localhost:8000/api/events', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        })
        const data = await res.json()
        set((state) => ({ events: [...state.events, data.data] }))
        return { success: true, message: 'Event created successfully'}
    },

    // send request to endpoint and grab the events
    fetchEvents: async () => {
        const res = await fetch('http://localhost:8000/api/events') //fetch the endpoint
        const data = await res.json() //extract the data
        set({ events: data.data}) //returning the data
    },

    // delete an event
    deleteEvent: async (eid) => {
        const res = await fetch(`http://localhost:8000/api/events/${eid}`, { //pass the event id (eid) through the server request to use the delete method to delete the event
            method: 'DELETE',

        })
        const data = await res.json() // get the data and extract
        if(!data.success) return { success: false, message: data.message} //if data success is false, then update the state

        set(state => ({ 
            events: state.events.filter(event => event._id !== eid)
        })) //use filter method to delete current event from the state and update the ui at the same time
        return {success: true, message: data.message}
    },

    updateEvent: async (eid, updatedEvent) => {
        const res = await fetch(`http://localhost:8000/api/events/${eid}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),
        })
        const data = await res.json() // get data & extract
        if(!data.success) return { success: false, message: data.message} //if data success is false, then update state

        set((state) => ({
            events: state.events.map((event => event._id === eid ? data.data : event)), //update the ui immediately without needed to refresh
        }))    
        
    },
}))



    



