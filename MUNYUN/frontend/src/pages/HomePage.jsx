// import React from 'react'
import { Box } from '@chakra-ui/react'
import './styling/home.css'

import Reports from '../components/Reports'




function HomePage() {
  return (
    <div className='homePage'>
      <div className="div1">
        <Box background='tomato' width='100%' padding={4} color='white' mb={3}>
          Box 1
        </Box>
        <Box background='tomato' width='100%' padding={4} color='white' mb={3}>
          Box 2
        </Box>
        <Box background='tomato' width='100%' padding={4} color='white' mb={3}>
          Box 3
        </Box>
        <Box background='tomato' width='100%' padding={4} color='white' mb={3}>
          Box 4
        </Box>
        <Box background='tomato' width='100%' padding={4} color='white'  mb={3}>
          Box 5
        </Box>
      </div>
      <div className="div2">Div 2</div>
      <div className="div3"><Reports /></div>
      <div className="div4">Div 4</div>
      <div className="div5">Div 5</div>
    </div>
  )
}

export default HomePage
