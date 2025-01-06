import { useExpenseTracking } from '../tracking/expense'
import React, {useEffect} from 'react'


function ZeroBased() {

    // fetch expenses from the tracking folder
    const {fetchExpenses, expenses} = useExpenseTracking()

    const [initialAmount, setInitialAmount] = useState(null)
    const [remainingAmount, setRemainingAmount] = useState(0)


    useEffect(() => {
    fetchExpenses()
    }, [fetchExpenses])
    console.log('expenses', expenses)

    return (
    <>
    Zero Based 
    </>
  )
}

export default ZeroBased