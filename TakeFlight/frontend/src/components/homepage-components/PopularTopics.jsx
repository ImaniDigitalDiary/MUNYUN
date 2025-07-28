import React from 'react'

// COMPONENTS
import '../SearchLinksFooter'

// STYLING
import './homepage-styling/popular-topics.css'
import '../styling/search-links-footer.css'
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import SearchLinksFooter from '../SearchLinksFooter'

function PopularTopics() {
  return (
    <div className='searchTopicsMainDiv'>
    <div className='searchTopicsWrapper'>
      <h1>Popular topics</h1>
      <div className='searchTopicsInputDiv'>
        <input type="search" className='searchTopics' name='searchTopics' placeholder='Search Take Flight' className='searchTopics'/>
        <FontAwesomeIcon icon={faMagnifyingGlass}  className='searchIcon fa-2xl'/>
      </div>
      
    </div>
    <div className='searchTopicsLinks'>
        <ul>
            <li><FontAwesomeIcon icon={faWifi} className='faWifi'/>Wi-Fi</li>
            <li><FontAwesomeIcon icon={faPlane} className='faPlane'/>Change flight</li>
            <li><FontAwesomeIcon icon={faUsers} className='faUsers'/>Take Flight Club</li>
            <li><FontAwesomeIcon icon={faPaw} className='faPaw'/>Traveling with pets</li>
            <li><FontAwesomeIcon icon={faBookmark} className='faBookmark'/>MileagePlus</li>
            <li><FontAwesomeIcon icon={faSuitcase} className='faSuitcase'/>Baggage</li>
            <li><FontAwesomeIcon icon={faSackDollar} className='faSackDollar'/>Refund</li>
            <li><FontAwesomeIcon icon={faHeadset} className='faHeadset'/>Help Center</li>
        </ul>
    </div>
    <SearchLinksFooter />
    
    </div>
  )
}

export default PopularTopics
