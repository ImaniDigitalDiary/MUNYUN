import { Button, Container, useColorModeValue, VStack, Heading, Box, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useExpenseTracking } from '../tracking/expense'


function CreatePage() {
  const [newExpense, setNewExpense] = useState({
    name: '',
    price: '',
    image: '',
  })

  const toast = useToast()

  const {createExpense}=useExpenseTracking()

  const handleAddExpense = async() => {
   const {success, message} = await createExpense(newExpense)
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true 
      })
    } else {
      toast({
      title: 'Success',
      description: message,
      status: 'success',
      isClosable: true 
    })
    }
    setNewExpense({name:'', price: '', image: ''})
  }
  
  return (
    <Container maxW={'container.sm'}>
      <VStack
        spacing={8}
      >
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
          Create New Expense
        </Heading>

        <Box
          w={'full'} bg={useColorModeValue('white', 'gray.800')}
          p={6} rounded={'lg'} shadow={'md'}
        >
          <VStack spacing={4}>
          <Input 
            placeholder='Expense Name'
            name='name'
            value={newExpense.name}
            onChange={(e) => setNewExpense({...newExpense, name: e.target.value})}
          />
          <Input 
            placeholder='Price'
            name='price'
            type='number'
            value={newExpense.price}
            onChange={(e) => setNewExpense({...newExpense, price: e.target.value})}
          />
          <Input 
            placeholder='Image URL'
            name='image'
            value={newExpense.image}
            onChange={(e) => setNewExpense({...newExpense, image: e.target.value})}
          />

          <Button colorScheme='blue' onClick={handleAddExpense} w='full'>
            Add Expense
          </Button>
          </VStack>

        </Box>
      </VStack>

    </Container>
  )
}

export default CreatePage
