import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import FindFlights from '../components/homepage-components/FindFlights'
import SponsorTravelInspo from '../components/homepage-components/SponsorTravelInspo'
import ExploreDest from '../components/homepage-components/ExploreDest'
import UsefulLinks from '../components/homepage-components/UsefulLinks'
import CarouselTwo from '../components/homepage-components/CarouselTwo'
import PopularTopics from '../components/homepage-components/PopularTopics'
import HomepageFooter from '../components/homepage-components/HomepageFooter'

// STYLING
import '../components/homepage-components/homepage-styling/homepage-main.css'
function HomePage() {
  return (
    <div className='homePage'>
        <Navbar />
        <FindFlights />
        <SponsorTravelInspo />
        {/* <Map /> */}
        <ExploreDest />
        <UsefulLinks />
        <CarouselTwo />
        <PopularTopics />
        <HomepageFooter />
    </div>
  )
}

export default HomePage
