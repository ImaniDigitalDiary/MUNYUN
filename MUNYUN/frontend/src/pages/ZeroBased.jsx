import React, { useEffect } from 'react'
import { useExpenseTracking } from '../tracking/expense'

function ZeroBased() {

    // fetch expenses from the tracking folder
    const {fetchExpenses, expenses} = useExpenseTracking()

    useEffect( () => {
        fetchExpenses()
    }, [fetchExpenses])

    const [initialAmount, setInitialAmount] = useState(0)
    const [remainingAmount, setRemainingAmount] = useState(0)
    
useEffect(() => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0)
    setRemainingAmount(initialAmount - totalExpenses)
  }, [expenses, initialAmount])

  const handleInitialAmountChange = (e) => {
    setInitialAmount(parseFloat(e.target.value) || 0)
  };

  return (
    <div>
      <h1>Zero-Based Budget Tracker</h1>
      <label>
        Initial Amount: $
        <input 
          type="number" 
          value={initialAmount} 
          onChange={handleInitialAmountChange} 
        />
      </label>
      <h2>Remaining Amount: ${remainingAmount.toFixed(2)}</h2>

      <h3>Expenses:</h3>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.name}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  )
    

    // let startingTotal = 1000;

} 

export default ZeroBased