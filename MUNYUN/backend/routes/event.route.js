import express from 'express'

import { getEvents, createEvent, deleteEvent, updateEvent  } from '../controllers/event.controller.js'

// GET ALL EVENTS
app.get('/api/events', getEvents)

// CREATE NEW EVENT
app.post('/api/events', createEvent)

// DELETE AN EVENT
app.delete('/api/events/:id', deleteEvent)

// UPDATE AN EVENT
router.put('/api/events/:id', updateEvent)

