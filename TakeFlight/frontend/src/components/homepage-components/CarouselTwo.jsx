import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'

// STYLING
import 'bootstrap/dist/css/bootstrap.min.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
    import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'

// COMPONENTS
import './homepage-styling/carousel-two.css'

// IMAGES
import image6 from './carousel-images/image6.jpg'
import image7 from './carousel-images/image7.jpg'
import image8 from './carousel-images/image8.jpg'
import { text } from '@fortawesome/fontawesome-svg-core'

function CarouselTwo() {
    const [index, setIndex] = useState(0)

    // handleSelect - update the index to the slide number that the use clicks to
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    // click to previous index
    const goToPrev = () => {
        setIndex((prev) => (prev === 0 ? 2 : prev - 1))
    }

    // click to next index
    const goToNext = () => {
        setIndex((prev) => (prev === 2 ? 0 : prev + 1))
    }

    const slides = [
        {
            image: image6,
            title: 'Travel inspiration with you in mind',
            text: 'Enjoy curated itineraries and hidden gems from Hemispheres.',
            button: 'Get inspired',
            btnClass: 'image6Btn',
        },
        {
            image: image7,
            title: 'Travel assistance that fits in your hand',
            text: 'Do the smart thing with your smart phone, Use our app to check-in for your flight, view your boarding pass, track bags, check your flight status and binge TV shows and movies onboard.',
            button: 'Download the app', 
            btnClass: 'image7Btn',
        },
        {
            image: image8,
            title: 'Explore modern-day Rome',
            text: 'The Colosseum, the Pantheon, the Forum Romanum - visiting ancient Rome is fun. Pasta making, wine tasting, big bus tours - visiting modern Rome is better.',
            button: 'Book now',
            btnClass: 'image8Btn',
        },
    ]

  return (
    <div className='carouselWrapper'>
      <Carousel 
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false} 
        controls={false} 
        interval={null} 
        >
            {slides.map((slide, i) => (
                
            <Carousel.Item key={i} className='caroItem'>
                <div className='imageTextDiv'>
                    <div className='carouselText'>
                            <h1>{slide.title}</h1> 
                            <p>{slide.text}</p> 
                            <button className='btnClass'>{slide.button}</button>
                        </div>
                        <div className='carouselImage'>
                            <img src={slide.image} alt={`Slide ${i + 1}`} />
                        </div>
                        </div>
            </Carousel.Item>
            ))}       
      </Carousel>

      {/* prev next buttons */}
      <div className='customControls'>
        <button onClick={goToPrev}>
            <FontAwesomeIcon icon={faCircleLeft} />
        </button>
        <button onClick={goToNext}>
            <FontAwesomeIcon icon={faCircleRight} />
        </button>
      </div>
    </div>
  )
}

export default CarouselTwo
