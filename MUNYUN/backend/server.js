// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import expenseRoutes from './routes/expense.route.js'


dotenv.config();

const app = express();

// allows us to accept JSON data in the req.body
app.use(express.json())


app.use('/api/expenses', expenseRoutes)

app.listen(8000, () => {
    connectDB();
    console.log('Server started at http://localhost:8000')
})

