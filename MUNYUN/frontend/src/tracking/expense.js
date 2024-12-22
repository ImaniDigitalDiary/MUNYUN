import { create } from 'zustand'

export const useExpenseTracking = create((set) => ({
    expenses: [],
    setExpenses: (expenses) => set({expenses}),
    // passing new expense into function to create expense for db
    createExpense: async (newExpense) => {
        if (!newExpense.name || !newExpense.image || !newExpense.price) {
            return {success: false, message: 'Please fill in all the required information'}
        }
        const res = await fetch('http://localhost:8000/api/expenses', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExpense),
        })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(err => console.error(err))
        // extract the data
        const data = await res.json()
        set((state) => ({ expenses: [...state.expenses, data.data] }))
        return { success: true, message: 'Expense created successfully'}
    },

    // send request to endpoint and grab the expenses
    fetchExpenses: async () => {
        const res = await fetch('http://localhost:8000/api/expenses') //fetch the endpoint
        const data = await res.json() //extract the data
        set({ expenses: data.data}) //returning the data
    }

}))

    // delete an expense




