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
      <div className='div1'>
        <div className="flowerCont">
          <img src={PinkFlower} className='flower'/>
          <a href="link.html" class="link">Click link</a>
        </div>
        <div className="flowerCont">
          <img src={PinkFlower} className='flower'/>
          <a href="link.html" class="link">Click link</a>
        </div>
        <div className="flowerCont">
          <img src={PinkFlower} className='flower'/>
          <a href="link.html" class="link">Click link</a>
        </div>
        <div className="flowerCont">
          <img src={PinkFlower} className='flower'/>
          <a href="link.html" class="link">Click link</a>
        </div>
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
