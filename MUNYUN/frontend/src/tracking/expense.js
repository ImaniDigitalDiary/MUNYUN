import { create } from 'zustand'

export const useExpenseTracking = create((set) => ({
    expenses: [],
    setExpenses: (expenses) => set({expenses}),
    // passing new expense into function to create expense for db
    createExpense: async (newExpense) => {
        if (!newExpense.name || !newExpense.image || !newExpense.price) {
            return {success: false, message: 'Please fill in all the required information'}
        }
        const res = await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExpense),
        });
        // extract the data
        const data = await res.json()
        set((state) => ({ expenses: [...state.expenses, data.data] }))
        return { success: true, message: 'Expense created successfully'}
    },

}))




