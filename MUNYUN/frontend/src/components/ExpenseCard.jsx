import React from 'react'
import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'

import { FaEdit as EditIcon } from 'react-icons/fa'; // imrport edit icon
import { MdDelete as DeleteIcon } from 'react-icons/md'; //Import DeleteIcon 

function ExpenseCard({expense}) {
  const textColor = useColorModeValue('gray.600', 'gray.200')
  const bg = useColorModeValue('white', 'gray.800')
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
          <IconButton icon={<EditIcon />} colorScheme='blue' />
          <IconButton icon={<DeleteIcon />} colorScheme='red'/>
        </HStack>
        </Box>

    </Box>
  )
}

export default ExpenseCard
