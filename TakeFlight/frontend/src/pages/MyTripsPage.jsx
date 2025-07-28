import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import Faq from '../components/my-trips-components/Faq'
import SearchLinksFooter from '../components/SearchLinksFooter'
import HomepageFooter from '../components/homepage-components/HomepageFooter'

// STYLING
import '../styling/my-trips.css'
// import '../components/my-trips-components/faq.css'

    // FONT AWESOME ICONS
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function MyTripsPage() {
  return (
    <div className='myTripsPage'>
        <Navbar />
        <div className="myTripsPageMainDiv">

            {/* MY TRIPS DIV 1 */}
            <div className="myTripsDiv1">
                <div className="myTripsDiv1Text">
                    <h1>My trips</h1>
                    <div>Looking for a receipt? <a href="#">Search receipts</a></div>
                </div>
            </div>

            {/* MY TRIPS DIV 2 */}
            <div className='myTripsDiv2'>
                <div className="mileagePlusMainDiv">
                    <div className='mileagePlusTextAndIcon'> 
                    <FontAwesomeIcon icon={faBookmark} className='fa-xl' /> 
                    <div className='mileagePlusText'>
                        <h4>Sign in to MileagePlus</h4>
                        <p>We can use your account information to find your trips.</p> 
                    </div>              
                    </div>
                    <div className='mileagePlusBtns'>
                        <button className='signInBtn'>Sign in</button>
                        <button className='joinNowBtn'>Join now</button>
                    </div>
                </div>     
            </div>

            {/* MY TRIPS DIV 3 */}
            <div className="myTripsDiv3">
                <div className="myTripsDiv3Heading">
                    <h2>Find a trip</h2>
                </div>
                <div className="myTripsDiv3InputDiv">
                    <div className="myTripsInput1">
                        <label htmlFor="">
                            Confirmation number
                        </label>
                        <input type="text" />
                    </div>
                    <div className="myTripsInput2">
                        <label htmlFor="">
                            Last name
                        </label>
                        <input type="text" />
                    </div>
                    <div>To add this trip to your account, <span className='signIn'>Sign in.</span></div>
                    <button className='nextBtn'>Next</button>
                </div>
            </div>

            <div className="myTripsDiv4">
                <div className="travelCreditDiv">
                    Looking for travel credit?
                    <br />
                    <span>Search travel credits</span>
                </div>
            </div>


            <div className="myTripsDiv5">
                <div className="faqs">
                    <Faq />
                </div>
            </div>

            <SearchLinksFooter />
            <HomepageFooter />

              




        </div>
    </div>
  )
}

export default MyTripsPage
