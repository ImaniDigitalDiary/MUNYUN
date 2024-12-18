// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Expense from './models/expense.model.js';

dotenv.config();

const app = express();

// allows us to accept JSON data in the req.body
app.use(express.json())

// GET ALL EXPENSES
app.get('/api/expenses', async (req, res) => { 
    try {
        const expenses = await Expense.find({}) //fetching an empty object will find all the expenses in the database
        res.status(200).json({ success: true, data: expenses})
    } catch (error) {
        console.log("error in fetching expenses:", error.message);
        res.status(500).json({ success: false, message: "Server error: " })
    }
 });

//CREATE AN EXPENSE 
app.post('/api/expenses', async (req, res) => {
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

app.put('/api/expense/:id', async (req, res) => {
    const { id } = req.params; // get id 

    const expense = req.body; // fields such as name, price, image, etc

    if(mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({ success: false, message: "invalid expense id"});
     }

    try {
       const updatedExpense = await Expense.findByIdAndUpdate(id, expense, {new:True})
       res.status(200).json({ success: true, data: updatedExpense })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

// DELETE AN EXPENSE
app.delete('/api/expenses/:id', async (req, res) => {
    const {id} = req.params 
    
    try {
        await Expense.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Expense deleted successfully'})
    } catch (error) {
        console.log("error in deleting expense:", error.message);
        res.status(404).json({ success: false, message: 'Expense not found' })
    }
}) //:id means it will be dynamic and can be any value the user passes

app.listen(8000, () => {
    connectDB();
    console.log('Server started at http://localhost:8000')
})

