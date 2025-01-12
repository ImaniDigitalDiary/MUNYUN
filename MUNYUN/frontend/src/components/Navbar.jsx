import { Container, Flex, Text, Button, HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
// import { useExpenseTracking } from '../tracking/expense'



function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode() 

  return (
    <div>
      <Container maxW={'1140px'} px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexDir={{
            base: 'column',
            sm: 'row',
          }}
        >
          <Text
            fontSize={{ base: '22', sm: '28'}}
            fontWeight={'bold'}
            textTransform={'uppercase'}
            textAlign={'center'}
            bgGradient={'linear(to-r, pink.700, green.300)'}
            bgClip={'text'}
          >
            <Link to={'/'}>MUNYUN</Link>

          </Text>

          <HStack spacing={2} alignItems={'center'}>
            <Link to={'/create'}>
            Create
            {/* <Button>
              <PlusSquareIcon fontSize={20} />
            </Button> */}
            </Link>
            <Link to={'/zero-based'}>
            ZB
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <IoMoon /> : <LuSun size='20' />}
            </Button>
          </HStack>

        </Flex>

      </Container>
    </div>
  )
}

export default Navbar
