// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

// 
app.get('/expenses', (req, res) => {})

console.log(process.env.MONGO_URI);
app.listen(8000, () => {
    // connectDB();
    console.log('Server started at http://localhost:8000')
})

