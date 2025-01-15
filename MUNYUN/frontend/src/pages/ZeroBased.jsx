import { useExpenseTracking } from '../tracking/expense'
import React, { useEffect, useState} from 'react'
import { Container, VStack, Text, Spinner, Heading, Input, useToast, Button } from '@chakra-ui/react'



function ZeroBased() {

    // fetch expenses from the tracking folder
    const {fetchExpenses, expenses, isLoading, error} = useExpenseTracking()

    const [initialAmount, setInitialAmount] = 
      useState(() => Number(localStorage.getItem('initialAmount')) || '')

    const [remainingAmount, setRemainingAmount] = 
      useState(() => Number(localStorage.getItem('remainingAmount')) || '')

    const [isAmountSet, setIsAmountSet] = 
      useState(()=> JSON.parse(localStorage.getItem('isAmountSet')) || false)

    const [additionalAmount, setAdditionalAmount] = useState('')

    const toast = useToast()

    // Fetch expenses from useExpenseTracking
    useEffect(() => {
    fetchExpenses()
    }, [fetchExpenses])
   


    // Calculate whenever expenses are added or subtracted from collection - or when budget (initialAmount) changes
    useEffect(() => {
      if (isAmountSet) {
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.price, 0)
        const newRemainingAmount = initialAmount - totalExpenses
        setRemainingAmount(newRemainingAmount)

        // Update remaining amount in local storage
        localStorage.setItem('remainingAmount', newRemainingAmount)
      }
    }, [expenses, initialAmount, isAmountSet])


    // synch changes in state w/ local storage
    useEffect(() => {
      localStorage.setItem['initialAmount', initialAmount]
      localStorage.setItem['isAmountSet', isAmountSet]
    }, [initialAmount, isAmountSet]);


    const handleSetBudget = () => {
      if (isNaN(initialAmount) || initialAmount <= 0) {
        toast({
          title: 'Invalid budget amount', 
          description: 'Please enter a valid budget amount.', 
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return;
    }
    
    setIsAmountSet(true);
      toast({
        title: 'Budget Set',
        description: `Your initial budget of $${initialAmount} has been set.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
  }

  const handleAddMoney = () => {
    if (isNaN(additionalAmount) || additionalAmount <= 0) {
      toast({
        title: 'Invalid additional amount', 
        description: 'Please enter a valid additional amount.', 
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    }
  
  const updatedInitialAmount = initialAmount + Number(additionalAmount)
  setInitialAmount(updatedInitialAmount)
  setAdditionalAmount('')
    toast({
      title: 'Money Added',
      description: `Successfully added $${additionalAmount} to your budget.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }



    return (
      <Container>
        <Heading>
          Zero-Based Budgeting
        </Heading>
        <VStack>
          {!isAmountSet ? (
            <>
            <Input
              placeholder='Enter Initial Budget Amount'
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              type='number'
            />
            <Button colorScheme='orange' onClick={handleSetBudget}>
              Set Budget
            </Button>
            </>
          ) : (
            <Text>Initial Budget: ${initialAmount}</Text>
          )}
          
          {/* Add Money */}
          {isAmountSet && (
            <>
            <Input
              placeholder='Add Money to Budget'
              value={additionalAmount}
              onChange={(e) => setAdditionalAmount(e.target.value)}
              type='number'
            />
            <Button colorScheme='blue' onClick={handleAddMoney}>
              Set Budget
            </Button>
            </>
          )}

          {/* Display the remaining amount */}
          {isAmountSet && (
            <Text fontSize='lg' color='green.500' fontWeight='bold'>
              Remaining Budget: ${remainingAmount}
            </Text>
          )}
          {isLoading ? ( 
            <Spinner />
          ) : error ? (
            <Text color='red.500'>Failed to load expenses: {error.message}</Text>
          ) : expenses && expenses.length > 0 ? (
            <>
              <Text>
                Expenses:
              </Text>
              {expenses.map((expense, index) => (
                <Text key={index}>
                  {expense.name}: ${expense.price}
                </Text>
              ))}
            </>
          ) :(
            <Text>No expenses found.</Text>
          )}
        </VStack>
      </Container>
  )
}

export default ZeroBased


  