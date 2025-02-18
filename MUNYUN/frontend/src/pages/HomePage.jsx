// import React from 'react'
import { Box } from '@chakra-ui/react'
import './styling/home.css'
import PinkFlower from '../images/3d-Pink-Flower.png'
// import '../index.css'


import Navbar from '../components/Navbar'
import MyCalendar from '../components/Calendar'
import Reports from '../components/Reports'




function HomePage() {
  return (
    <div id='homeMainCont'>
    
    <div className='homePage'>
      <div className="div1">
        <Navbar />
      </div>
      <div className='div2'>
        <MyCalendar 
        />
      </div>
      
      {/* <div className="testDiv"> */}
        <div bg='#ffc0cb' shadow='md' className="div3">
          Generated inspirational quote.
        </div>

        {/* <Box  bg='bg' shadow='md' borderRadius='md' className="dividk">
          This is a random quote about life or finances to keep user in a positive mindset.
        </Box> */}
      {/* </div> */}
      

      <div className="div4"><Reports /></div>

      <div className="div5">Div 5</div>
    </div>
    </div>

  )
}

export default HomePage
