// import React from 'react'
import { Box } from '@chakra-ui/react'
import './styling/home.css'


import Navbar from '../components/Navbar'
import Reports from '../components/Reports'




function HomePage() {
  return (
    <>
    <Navbar />
    <div className='homePage'>
      <div className="div1">
        <Box background='pink.400' width='100%' padding={4} color='white' mb={20}>
          Box 1
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white' mb={20}>
          Box 2
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white' mb={20}>
          Box 3
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white' mb={20}>
          Box 4
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white'  mb={20}>
          Box 5
        </Box>
      </div>
      <div className="div2">Div 2</div>
      <div className="div3">Div 3</div>
      <div className="div4">Expense Report<Reports /></div>
      <div className="div5">Div 5</div>
      <div className="div6">Div 6</div>
    </div>
    </>

  )
}

export default HomePage
