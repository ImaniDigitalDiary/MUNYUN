// import React from 'react'
import { Box } from '@chakra-ui/react'
import './styling/home.css'
import PinkFlower from '../images/3d-Pink-Flower.jpg'


import Navbar from '../components/Navbar'
import MyCalendar from '../components/Calendar'
import Reports from '../components/Reports'




function HomePage() {
  return (
    <div className='homeMainCont'>
    
    <div className='homePage'>
      <div className="div1">
        <Navbar />
      </div>
      <div className='div2'>
        <MyCalendar 
        />
      </div>
      

      <Box  bg='bg' shadow='md' borderRadius='md' className="div3">This is a random quote about life or finances to keep user in a positive mindset.</Box>

      <div className="div4">Expense Report<Reports /></div>

      <div className="div5">Div 5</div>
    </div>
    </div>

  )
}

export default HomePage
