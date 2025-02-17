import express from 'express';

import { createExpense, deleteExpense, getExpenses, updateExpense, updateCategory, getExpenseReport } from '../controllers/expense.controller.js';

const router = express.Router();

// GET ALL EXPENSES
router.get('/', getExpenses);

//CREATE AN EXPENSE 
router.post('/', createExpense );

// UPDATE AN EXPENSE
router.put('/:id', updateExpense)

// DELETE AN EXPENSE
router.delete('/:id', deleteExpense ) //:id means it will be dynamic and can be any value the user passes

// Update expense category
router.put('/update-category/:id', updateCategory)

// Reporting route to retrieve aggregated data for charting purposes
router.get('/report', getExpenseReport)

export default router;