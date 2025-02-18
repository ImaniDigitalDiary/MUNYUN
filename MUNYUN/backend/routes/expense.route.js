import express from 'express';

import { createExpense, deleteExpense, getExpenses, updateExpense, updateCategory, getExpenseReport } from '../controllers/expense.controller.js';

const expenseRouter = express.Router();

// GET ALL EXPENSES
expenseRouter.get('/api/expenses', getExpenses);


//CREATE AN EXPENSE 
expenseRouter.post('/api/expenses', createExpense );


// UPDATE AN EXPENSE
expenseRouter.put('/api/expenses/:id', updateExpense)


// DELETE AN EXPENSE
expenseRouter.delete('/api/expenses/:id', deleteExpense ) //:id means it will be dynamic and can be any value the user passes


// Update expense category
expenseRouter.put('/api/expenses/update-category/:id', updateCategory)


// Reporting route to retrieve aggregated data for charting purposes
expenseRouter.get('/report', getExpenseReport)


export default expenseRouter;