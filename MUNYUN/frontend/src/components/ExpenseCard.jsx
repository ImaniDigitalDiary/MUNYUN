import React, { useState } from 'react'
import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue, useToast, ModalOverlay, ModalCloseButton, Input,
  Modal,  ModalContent, ModalHeader, ModalBody, VStack, ModalFooter, Button
 } from '@chakra-ui/react'

import {  FaEdit as EditIcon } from 'react-icons/fa'; // imrport edit icon
import { MdDelete as DeleteIcon } from 'react-icons/md'; //Import DeleteIcon 
import { useExpenseTracking } from '../tracking/expense';

const ExpenseCard = ({expense, isOpen, onOpen, onClose}) => {
  const textColor = useColorModeValue('gray.600', 'gray.200')
  const bg = useColorModeValue('white', 'gray.800')

  const [updateExpense, setUpdatedExpense] = useState(expense)

  const {deleteExpense, updatedExpense } = useExpenseTracking()
  const toast = useToast()
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteExpense = async (eid) => {
    const {success, message} = await deleteExpense(eid)
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
        duration: 3000
      })
    } else {
      toast({
      title: 'Success',
      description: message,
      status: 'success',
      isClosable: true,
      duration: 3000
    })
  }}

  const handleUpdateExpense = async (eid, updatedExpense) => {
    
  }

  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
        bg={bg}
    >
        <Image  src={expense.image} alt={expense.name} h={48} w='full' objectFit='cover'/>

        <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
          {expense.name}
        </Heading> 

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
          ${expense.price}
        </Text>

          <HStack spacing={2}>
            <IconButton aria-hidden="false" icon={<EditIcon />} colorScheme='blue' 
            onClick={onOpen}/>
            <IconButton icon={<DeleteIcon />} colorScheme='red' 
            onClick={() => handleDeleteExpense(expense._id)} />
          </HStack>
        </Box>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />


            <ModalContent>
              <ModalHeader>Update Expense</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={4}>
                  <Input placeholder='Expense Name' name='name' value={updatedExpense.name}
                    onChange={(e) => setUpdatedExpense({ ...updatedExpense, name: e.target.value})}
    />
                  <Input placeholder='Expense Price' name='price' type='number' value={updatedExpense.price}
                    onChange={(e) => setUpdatedExpense({ ...updatedExpense, price: e.target.value})}
                  />
                  <Input placeholder='Image URL' name='image' value={updatedExpense.image}
                    onChange={(e) => setUpdatedExpense({ ...updatedExpense, image: e.target.value})}
                  />
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} 
                onClick={() => handleUpdateExpense(expense._id, expense)}>
                  Update
                </Button>
                <Button variant='ghost' onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ) } 
    </Box>
  )
}

export default ExpenseCard
