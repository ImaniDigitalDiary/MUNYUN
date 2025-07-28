import React from 'react'

// IMAGES
import sponsorImage from './homepage-images/spon-trav-inspo.jpg'
import sponTravLogo from './homepage-images/take-flight-logo.png'

// STYLING
import './homepage-styling/sponsor-trav.css'

function SponsorTravelInspo() {
  return (
    <div className='sponTravDiv'>
    <div
        className='sponTravImg'
        style={{
            backgroundImage: `url(${sponsorImage})`,
            backgroundSize: 'cover',
        }}
    >
            <div className='sponTravText'>
                <h1 className='sponTravH1'>Find your travel inspiration</h1>
                <h3 className='sponTravH2'>Get curated travel guides for everywhere United flies.</h3>
                <button className='sponTravBtn'>Get Inspired</button>
            </div>
    </div>
    <div className='sponTavLogoDiv'>
        <img src={sponTravLogo} alt="" className='sponTravLogo'/>
    </div>
    </div>
  )
}

export default SponsorTravelInspo
