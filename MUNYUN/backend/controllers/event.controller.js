import Event from '../models/event.model.js'
import mongoose from 'mongoose'


export const getEvents = async (req, res) => {
    try {
        const events = await Event.find({}) //fetching an empty object will find all the events in the database
        res.status(200).json({ success: true, data: events})
    } catch (error) {
        console.log("error in fetching events:", error.message);
        res.status(500).json({ success: false, message: "Server error: " })
    }
};

export const createEvent = async (req, res) => {
    try {
    const { title, start, end, color } = req.body; // user will send the event data
    const newEvent = new Event({ title, start, end, color });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }   
};

export const deleteEvent = async (req, res) => {
    try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params; // get id 

    const event = req.body; // fields such as name, price, image, etc

    if ( !mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({ success: false, message: "invalid event id"});
    }

    try {
       const updatedEvent = await Event.findByIdAndUpdate(id, event, {new: true});
       res.status(200).json({ success: true, data: updatedEvent })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' })
    }
}

