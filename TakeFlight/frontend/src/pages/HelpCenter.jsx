 import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import HelpWithToday from '../components/help-page-components/HelpWithToday'
import SearchLinksFooter from '../components/SearchLinksFooter'
import HomepageFooter from '../components/homepage-components/HomepageFooter'


// IMAGES
import cloudImage from '../images/clouds.jpg'

// STYLING
import '../components/help-page-components/help-page-styling/help-center.css'
import '../components/homepage-components/homepage-styling/homepage-footer.css'


  // FONT AWESOME ICONS
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
  import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
  import { faComments } from '@fortawesome/free-solid-svg-icons'
  import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'


function HelpCenter() {
  return (
    <div className='helpCenterPage'>
    <Navbar />
    <div className='helpCenterPageMainDiv'>
      <div className='helpCenterDiv1'>
        <h1>Help Center</h1>
          <p className='helpCenterDiv1Para'>
            Find or select a flight for help with with a trip.
            <br />
            <a className='helpCenterDiv1Link'>Looking for something else?</a>
          </p>
          
      </div>
      <div className='helpCenterDiv2'>
        <h3>Which trip do you need help with?</h3>
        <div className="mileagePlusMainDiv">
          <div className='mileagePlusTextAndIcon'> 
            <FontAwesomeIcon icon={faBookmark} className='fa-xl' /> 
            <div className='mileagePlusText'>
              <h4>Sign in to MileagePlus</h4>
              <p>We can use your account information to find your trips.</p> 
            </div>              
          </div>
          {/* <div className="mileagePlusBtnsDiv"> */}
            <div className='mileagePlusBtns'>
                <button className='signInBtn'>Sign in</button>
                <button className='joinNowBtn'>Join now</button>
            </div>
          {/* </div> */}

        </div>     
      </div>

      {/* HELP CENTER DIV3 */}
      <div className='helpCenterDiv3'>
        <button className='findTripBtn'>Find a trip</button>
        <div className='findTripDiv'>
          <h3>Let's start by finding your trip:</h3>
          <div className='findTripInputsAndBtn'>
            <div className="findTripInputs">
              <div className='confirmNum'>
                <label htmlFor="confirmNum">Confirmation number*</label>
                <input type="text" />
              </div>
              <div className='lastName'>
                <label htmlFor="lastName">Last name*</label>
                <input type="text" />
              </div>
            </div>
                     
            <button>Search</button>
          </div>     
        </div>     
      </div>

      <HelpWithToday />

      <div
        className='btmSearchBar'
        style={{
          backgroundImage: `url(${cloudImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '238px'
        }}
      >
        {/* <label className='searchBar' htmlFor="searchBar"></label> */}
        <div className='btmSearchBarInputDiv'>
          <input className='btmSearchBarInput' type="text"  placeholder='What else can we help you find?'/>
        </div>
          <div className="btmSearchBtnDiv">
            <button className='btmSearchBtn'>Search</button>
          </div>
        
      </div>


      {/* CONTACT US DIV */}
      <div className='contactUsMainDiv'>
        <div className="contactUsDivs">
          <h4>Not finding what you're looking for? Contact us!</h4>
        <div className="contactUsTextAndIcons">
          <div className="contactUsDiv1">
            <FontAwesomeIcon icon={faMobileScreen}  className='contactUsIcon contactUsPhoneIcon fa-3x'/>
            <h6>Text us</h6>
              <div>Need help and don't want to be tied to your desktop or wait on hold? Text 'TakeFlight'
                to 28133 for Take Flight Customer Servie on the go!
              </div>
          </div>
          <div className="contactUsDiv2">
            <FontAwesomeIcon icon={faComments} className='contactUsIcon fa-3x'/>
            <h6>Chat with us</h6>
            <div>
              Agents available
              <br />
              <a className='contactUsLink'>Chat now</a>
            </div>
          </div>
          <div className="contactUsDiv3">
            <FontAwesomeIcon icon={faHeadphonesSimple} className='contactUsIcon fa-3x'/>
            <h6>Call us</h6>
            <div>
              Talk with an agent
              <br />
              <a className='contactUsLink'>View directory</a>
            </div>           
          </div>
        </div>
        </div>

        <div className="feedbackCont">
          Was this helpful?
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>


      <SearchLinksFooter />

      <HomepageFooter />

    </div>
    </div>
  )
}

export default HelpCenter
