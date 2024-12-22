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
    },

    // delete an expense
    deleteExpense: async (eid) => {
        const res = await fetch(`http://localhost:8000/api/expenses/${eid}`, { //pass the expense id (eid) through the server request to use the delete method to delete the expense
            method: 'DELETE',

        })
        const data = await res.json() // get the data and extract
        if(!data.success) return { success: false, message: data.message} //if data success is false, then update the state

        set(state => ({ expenses: state.expenses.filter(expense => expense._id !== eid)})) //use filter method to delete current expense from the state and update the ui at the same time
        return {success: true, message: data.message}
    }
}))

    



