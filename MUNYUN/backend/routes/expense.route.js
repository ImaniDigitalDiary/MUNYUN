import express from 'express';
import mongoose from 'mongoose';

import Expense from '../models/expense.model.js';

const router = express.Router();

// GET ALL EXPENSES
router.get('/', async (req, res) => { 
    try {
        const expenses = await Expense.find({}) //fetching an empty object will find all the expenses in the database
        res.status(200).json({ success: true, data: expenses})
    } catch (error) {
        console.log("error in fetching expenses:", error.message);
        res.status(500).json({ success: false, message: "Server error: " })
    }
 });

//CREATE AN EXPENSE 
router.post('/', async (req, res) => {
    const expense = req.body; // user will send this data 

    if(!expense.name || !expense.price || !expense.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields"})
    }

    const newExpense = new Expense(expense);

    try {
        await newExpense.save(); //saves expense to the db
        res.status(201).json({ success: true, data: newExpense})
    } catch (error) {
        console.error("Error in Create Expense", error.message);
        res.status(500).json({ success: false, message: " Server Error"})
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params; // get id 

    const expense = req.body; // fields such as name, price, image, etc

    if ( !mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({ success: false, message: "invalid expense id"});
    }

    try {
       const updatedExpense = await Expense.findByIdAndUpdate(id, expense, {new: true});
       res.status(200).json({ success: true, data: updatedExpense })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

// DELETE AN EXPENSE
router.delete('/:id', async (req, res) => {
    const {id} = req.params 
    
    try {
        await Expense.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Expense deleted successfully'})
    } catch (error) {
        console.log("error in deleting expense:", error.message);
        res.status(404).json({ success: false, message: 'Expense not found' })
    }
}) //:id means it will be dynamic and can be any value the user passes

export default router;