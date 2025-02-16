import { Container, Flex, Text, Button, HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
// import { useExpenseTracking } from '../tracking/expense'

import homeLogo from '../images/logoipsum-345.svg'
import PinkFlower from '../images/3d-Pink-Flower.png'



function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode() 

  return (
    <div className='navbar'>
      <Container maxW={'2560px'} px={4}>
        <Flex
          
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
            <Link to={'/'}><img src={homeLogo} className='homeLogo' /></Link>

          </Text>

          {/* <HStack spacing={4} alignItems={'center'}>
            <Link to={'/create'}>
            Create Expense
            </Link>
            <Link to={'/view-expenses'}>
            View Expenses
            </Link>
            <Link to={'/zero-based'}>
            ZB
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <IoMoon /> : <LuSun size='20' />}
            </Button>
          </HStack> */}

          <HStack>
            <div className="flowerCont">
              <img src={PinkFlower} className='flower'/>
              <Link to={'/create'} className="link">Create an Expense</Link>
            </div>
            <div className="flowerCont">
              <img src={PinkFlower} className='flower'/>
              <Link to={'/view-expenses'} className="link">View Expenses</Link>
            </div>
            <div className="flowerCont">
              <img src={PinkFlower} className='flower'/>
              <Link href="link.html" className="link">Click link</Link>
            </div>
            <div className="flowerCont">
              <img src={PinkFlower} className='flower'/>
              <Link href="link.html" className="link">Click link</Link>
            </div>
            <div className="flowerCont">
              <img src={PinkFlower} className='flower'/>
              <Link href="link.html" className="link">Click link</Link>
            </div>
            
          </HStack>

        </Flex>
        

      </Container>
    </div>
  )
}

export default Navbar
