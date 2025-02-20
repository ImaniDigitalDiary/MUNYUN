// import React from 'react'
import {useState, useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import './styling/home.css'
import PinkFlower from '../images/3d-Pink-Flower.png'
// import '../index.css'

// COMPONENTS



import Navbar from '../components/Navbar'
import MyCalendar from '../components/Calendar'
import Reports from '../components/Reports'





function HomePage() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        setQuote(data.slip.advice) //extract the quote text
      } catch (error) {
        console.error('Error fetching quote', error)
        setQuote('Inspiration is everywhere, keep pushing forward!') // fallback quote
      }
    }
    fetchQuote()
  }, []) //runs once when the component mounts


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
          <p className='quoteText'>{quote}</p>
        </div>
      

      <div className="div4"><Reports /></div>

      <div className="div5">Div 5</div>
    </div>
    </div>

  )
}

export default HomePage
