import express from 'express';




import { createExpense, deleteExpense, getExpenses, updateExpense } from '../controllers/expense.controller.js';

const router = express.Router();

// GET ALL EXPENSES
router.get('/', getExpenses);

//CREATE AN EXPENSE 
router.post('/', createExpense );

router.put('/:id', updateExpense)

// DELETE AN EXPENSE
router.delete('/:id', deleteExpense ) //:id means it will be dynamic and can be any value the user passes

export default router;