// import React from 'react'
import { Box } from '@chakra-ui/react'
import './styling/home.css'
import PinkFlower from '../images/3d-Pink-Flower.jpg'


import Navbar from '../components/Navbar'
import Reports from '../components/Reports'




function HomePage() {
  return (
    <div className='homeMainCont'>
    <Navbar />
    <div className='homePage'>
      <div className="div1">
        <img src={PinkFlower}/>
        <img src={PinkFlower}/>
        <img src={PinkFlower}/>
        {/* <Box background='pink.400' width='100%' padding={4} color='white'>
          Box 1
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white' >
          Box 2
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white' >
          Box 3
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white' >
          Box 4
        </Box>
        <Box background='pink.400' width='100%' padding={4} color='white'>
          Box 5
        </Box> */}
      </div>
      <div className="div2">Div 2</div>
      <div className="div3">Div 3</div>
      <div className="div4">Expense Report<Reports /></div>
      <div className="div5">Div 5</div>
      <div className="div6">Div 6</div>
    </div>
    </div>

  )
}

export default HomePage
