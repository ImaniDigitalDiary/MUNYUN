import { useExpenseTracking } from '../tracking/expense'
import React, { useEffect, useState} from 'react'
import { Container, VStack, Text, HStack, Heading, Input, useToast, Button, Box } from '@chakra-ui/react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { handleDragEnd } from '../utilities/dragAndDrop.utilities'

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

    // category object
    const [categories, setCategories] = useState({
      uncategorized: expenses,
      groceries: [],
      utilities: [],
      entertainment: [],
      savings: [],
      investments: [],
    })

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

  const handleDragEnd = (result) => {
    const {source, destination} = result

    if (!destination) return;

    const sourceCategory = source ="droppableId" 
    const destCategory = destination.droppableId

    const sourceItems = [...categories[sourceCategory]]
    const destItems = [...categories[destCategory]]

    const [movedItem] = sourceItems.splice(sourceCategory.index, 1)

    destItems.splice(destination.index, 0, movedItem)

    setCategories({
      ...categories,
      [sourceCategory]: sourceItems,
      [destCategory]: destItems,
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
              Add Money
            </Button>
            </>
          )}

                {/* Wrap drag-and-drop context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <HStack spacing={6} align='start' mt={6}>
          {Object.keys(categories).map((category) => (
          <Droppable droppableId={category} key={category}>
            {(provided) => (
              <VStack
                {...provided.droppableProps}
                ref={provided.innerRef}
                spacing={4}
                align='stretch'
                bg='gray.50'
                p={4}
                borderRadius='md'
                shadow='sm'
                minW='300px'
                mt={4}
              >
                <Heading size='sm' textAlign='center' color='gray.700'>
                  {category.toUpperCase()}
                </Heading>
                {/* Display Draggable Expenses */}
                {categories[category].map((expense, index) => (
                  <Draggable key={expense._id} draggableId={expense._id} index={index}>
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        bg='white'
                        p={4}
                        borderRadius='md'
                        shadow='sm'
                        border='1px solid'
                        borderColor='gray.200'
                      >
                        <Text fontWeight='bold'>{expense.name}</Text>
                        <Text>${expense.price}</Text>
                      </Box>
                    )}
                  </Draggable>
                ))}

                {/* Placeholder ensures proper layout while dragging */}
                {provided.placeholder}
              </VStack>
            )}
          </Droppable>
          ))}
        </HStack>

      </DragDropContext>
        </VStack>
      </Container>
  )
}

export default ZeroBased


