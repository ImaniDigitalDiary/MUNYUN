import { useExpenseTracking } from '../tracking/expense'
import React, { useEffect, useState} from 'react'
import { Container, VStack, Text, HStack, Heading, Input, useToast, Button, Box } from '@chakra-ui/react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function ZeroBased() {
  const {fetchExpenses, expenses, isLoading, error} = useExpenseTracking()
  const [initialAmount, setInitialAmount] = useState(() => Number(localStorage.getItem('initialAmount')) || 0)
  const [remainingAmount, setRemainingAmount] = useState(() => Number(localStorage.getItem('remainingAmount')) || 0)
  const [isAmountSet, setIsAmountSet] = useState(() => JSON.parse(localStorage.getItem('isAmountSet')) || false)
  const [additionalAmount, setAdditionalAmount] = useState('')
  
  const [categories, setCategories] = useState({ uncategorized: expenses || [] })
  const toast = useToast()

  // fetch expenses
  useEffect(() => {
    fetchExpenses()
  }, [fetchExpenses])

  useEffect(() => {
    const categorizedExpenses = expenses.reduce(
      (acc, expense) => {
        const category = expense.category || 'uncategorized'
        acc[category] = acc[category] ? [...acc[category], expense] : [expense]
        return acc
      },
      {uncategorized: []}
    );
    setCategories(categorizedExpenses)
  }, [expenses])

  useEffect(() => {
    if (isAmountSet) {
      const totalExpenses = Object.values(categories)
        .flat()
        .reduce((sum, expense) => sum + expense.price, 0)

      const newRemainingAmount = initialAmount - totalExpenses
      setRemainingAmount(newRemainingAmount)
      localStorage.setItem('remainingAmount', newRemainingAmount)
    }
  }, [expenses, initialAmount, isAmountSet, categories])

  useEffect(() => {
    localStorage.setItem('initialAmount', initialAmount)
    localStorage.setItem('isAmountSet', isAmountSet)
  }, [initialAmount, isAmountSet])

  const handleSetBudget = () => {
    if (isNaN(initialAmount) || initialAmount <= 0) {
      toast({
        title: 'Invalid budget amount',
        description: 'Please enter a valid budget amount.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    setIsAmountSet(true)
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
      return
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
    // if no destination, exit
    if (!destination) return

    const sourceCategory = source.droppableId
    const destCategory = destination.droppableId

    //  if source and destination are the same & the index doesn't change, exit
    if (sourceCategory === destCategory && source.index === destination.index) return

    // clone the current categories to avoid (mutation)
    const updatedCategories = { ...categories }

    // Extract from the sourceItems array and remove the dragged item
    const sourceItems = Array.from(updatedCategories[sourceCategory])
    const [movedItem] = sourceItems.splice(source.index, 1)

    // update the source category in the cloned object
    updatedCategories[sourceCategory] = sourceItems

    // add the moved item to the destination category
    const destItems = Array.from(updatedCategories[destCategory] || [])
    destItems.splice(destination.index, 0, movedItem)

    // update the destination category in the cloned object
    updatedCategories[destCategory] = destItems

    // update the state w/ the modified categories
    setCategories(updatedCategories)
  }

  return (
    <Container>
      <Heading>Zero-Based Budgeting</Heading>
      <VStack>
        {!isAmountSet ? (
          <>
            <Input
              placeholder="Enter Initial Budget Amount"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              type="number"
            />
            <Button colorScheme="orange" onClick={handleSetBudget}>Set Budget</Button>
          </>
        ) : (
          <Text>Budget Amount: ${initialAmount}</Text>
        )}

        {isAmountSet && (
          <>
            <Input
              placeholder="Add Money to Budget"
              value={additionalAmount}
              onChange={(e) => setAdditionalAmount(e.target.value)}
              type="number"
            />
            <Button colorScheme="blue" onClick={handleAddMoney}>Add Money</Button>
          </>
        )}

        <DragDropContext onDragEnd={handleDragEnd}>
          <HStack spacing={6} align="start" mt={6}>
            {Object.keys(categories).map((category) => (
              <Droppable droppableId={category} key={category}>
                {(provided) => (
                  <VStack
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    spacing={4}
                    align="stretch"
                    bg="gray.50"
                    p={4}
                    borderRadius="md"
                    shadow="sm"
                    minW="300px"
                    mt={4}
                  >
                    <Heading size="sm" textAlign="center" color="gray.700">
                      {category.toUpperCase()}
                    </Heading>
                    {categories[category].map((expense, index) => (
                      <Draggable key={expense._id} draggableId={expense._id} index={index}>
                        {(provided) => (
                          <Box
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            bg="white"
                            p={4}
                            borderRadius="md"
                            shadow="sm"
                            border="1px solid"
                            borderColor="gray.200"
                          >
                            <Text fontWeight="bold">{expense.name}</Text>
                            <Text>${expense.price}</Text>
                          </Box>
                        )}
                      </Draggable>
                    ))}
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
