import React, { useState, useEffect } from 'react'

// IMAGES
import image1 from './carousel-images/image1.jpg'
import image2 from './carousel-images/image2.jpg'
import image3 from './carousel-images/image3.jpg'
import image4 from './carousel-images/image4.jpg'
import image5 from './carousel-images/image5.jpg'


// STYLING
import './homepage-styling/carousel.css'

function Carousel() {
    const images = [image1, image2, image3, image4, image5]
    const [currentIndex, setCurrentIndex] = useState(0)

    // TIMER FOR HOW LONG EACH IMAGE SHOWS BEFORE CHANGING
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000) //4sec interval

        return () => clearInterval(timer)
    }, [])
    
      return (
    <div>
        <div 
            className='carouselBackground'
            style={{ 
                backgroundImage: `url(${images[currentIndex]})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease=in-out'
            }}
        />
        
    </div>
  )
}

export default Carousel
