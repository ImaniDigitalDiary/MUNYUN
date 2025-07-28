import React from 'react'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// STYLING
import './homepage-styling/useful-links.css'

function UsefulLinks() {
  return (
    <div>
      
      <div className='usefulLinksDiv'>
        <h1 className='usefulLinkHeading'>Useful links for you</h1>
        <div className='usefulLinkBorderDiv'>
          {/* ROW 1 */}
          <div className='row1'>
            <div className='usefulLinkDiv'>
            <div className='usefulLinkText'>
                <h2>Plan your trip</h2>
                <p>Find a destination and any entry requirements.</p>
            </div>
            <div className='faArrowRightDiv'>
              <FontAwesomeIcon className='faArrowRight fa-2xl fa-light' icon={faArrowRight} />
            </div>
            </div>
            <div className='usefulLinkDiv'>
            <div className='usefulLinkText'>
                <h2>Visit the Help Center</h2>
                <p>Find info on refunds, bags, seats and more.</p>
            </div>
            <div className='faArrowRightDiv'>
              <FontAwesomeIcon className='faArrowRight fa-2xl fa-light' icon={faArrowRight} />
            </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className='row2'>
            <div className='usefulLinkDiv'>
              <div className='usefulLinkText'>
                  <h2>Stay connected</h2>
                  <p>Get Wi-Fi for your next flight.</p>
              </div>
              <div className='faArrowRightDiv'>
                <FontAwesomeIcon className='faArrowRight fa-2xl fa-light' icon={faArrowRight} />
              </div>
            </div>
            <div className='usefulLinkDiv'>
              <div className='usefulLinkText'>
                  <h2>Time to start packing</h2>
                  <p>Learn more about bringing bags on your trip.</p>
              </div>
              <div className='faArrowRightDiv'>
                <FontAwesomeIcon className='faArrowRight fa-2xl fa-light' icon={faArrowRight} />
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className='row3'>
            <div className='usefulLinkDiv'>
              <div className='usefulLinkText'>
                  <h2>What to know before you go</h2>
                  <p>The world of travel has changed, find out how.</p>
              </div>
              <div className='faArrowRightDiv'>
                <FontAwesomeIcon className='faArrowRight fa-2xl fa-light' icon={faArrowRight} />
              </div>
            </div>
            <div className='usefulLinkDiv'>
              <div className='usefulLinkText'>
                  <h2>See what's on your flight</h2>
                  <p>View your seating, food and entertainment options.</p>
              </div>
              <div className='faArrowRightDiv'>
                <FontAwesomeIcon className='faArrowRight fa-2xl fa-light' icon={faArrowRight} />
              </div>
            </div>
          </div>

             
            
        </div>
      </div>
    </div>
  )
}

export default UsefulLinks
