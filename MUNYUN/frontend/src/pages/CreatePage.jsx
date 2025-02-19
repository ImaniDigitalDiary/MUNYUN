import { Button, Container, useColorModeValue, VStack, Heading, Box, Input, useToast, Link , Select} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useExpenseTracking } from '../tracking/expense'



function CreatePage({onExpenseCreate} ) {
  const [newExpense, setNewExpense] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
  })

  const [customCategory, setCustomCategory] = useState('')
  const [useCustomCategory, setUseCustomCategory] = useState(false)

  const categories = ['Rent', 'Utilities', 'Groceries', 'Transporation', 'Entertainment', ]

  const toast = useToast()
  const {createExpense}=useExpenseTracking()

  const handleAddExpense = async() => {
    const expenseToSave = {
      ...newExpense,
      category: useCustomCategory ? customCategory : newExpense.category,
    }

  //  const {success, message} = await createExpense(newExpense)
  const {success, message} = await createExpense(expenseToSave)

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

    // add the new expense to the relevant category for ZeroBased Page
    // onExpenseCreate(newExpense) // pass the newly created expense****
    // onExpenseCreate(expenseToSave)

      // reset form
    setNewExpense({name:'', price: '', image: '', category: ''})
    setCustomCategory('')
    setUseCustomCategory(false)
    }
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value
    console.log('Selecting category:', value)
    setNewExpense({ ...newExpense, category: value })

    if (value === 'Custom') {
      setUseCustomCategory(true)
    } else {
      setUseCustomCategory(false)
      setCustomCategory('')
    }
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
          <Select 
            placeholder='Select Expense Category'
            name={'category'}
            value={newExpense.category}
            // onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
            onChange={handleCategoryChange}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
            
            <option value='Custom'>Custom</option>
          </Select>
          {useCustomCategory && (
            <Input 
              mt={2}
              placeholder='Enter Custom Category'
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
            />
          )}
      

            <Button colorScheme='blue' onClick={handleAddExpense} w='full'>
              <Link href="/zero-based">Add Expense</Link>
            </Button>
          </VStack>

        </Box>
      </VStack>

    </Container>
  )
}

export default CreatePage
