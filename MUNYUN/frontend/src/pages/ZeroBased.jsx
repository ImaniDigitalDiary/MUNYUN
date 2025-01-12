import { useExpenseTracking } from '../tracking/expense'
import React, {useEffect} from 'react'
import { Container, VStack, Text, Spinner } from '@chakra-ui/react'


function ZeroBased() {

    // fetch expenses from the tracking folder
    const {fetchExpenses, expenses, isLoading, error} = useExpenseTracking()

    // const [initialAmount, setInitialAmount] = useState('')
    // const [remainingAmount, setRemainingAmount] = useState('')
    // const [isAmountSet, setIsAmountSet] = useState(false)



    useEffect(() => {
    fetchExpenses()
    }, [fetchExpenses])
    console.log('expenses', expenses)


    return (
      <Container maxW="container.md" py={6}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">
            Zero-Based Budgeting
          </Text>

          {isLoading ? (
            <Spinner />
          ) : error ? (
            <Text color="red.500">Failed to load expenses: {error.message}</Text>
          ) : expenses && expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <Text key={index}>
                {expense.name}: ${expense.price}
              </Text>
            ))
          ) : (
            <Text>No expenses found.</Text>
          )}
        </VStack>
      </Container>
  )
}

export default ZeroBased