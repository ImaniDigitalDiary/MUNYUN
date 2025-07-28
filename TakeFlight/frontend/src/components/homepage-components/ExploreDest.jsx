import React from 'react'

// STYLES 
import './homepage-styling/carousel.css'

  // FONT AWESOME ICONS
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


// COMONENTS
import Map from '../homepage-components/Map'


function ExploreDest() {
  return (
    <div className='exploreDiv'>
    <div className='exploreHeadingDiv'>
      <h1 className='exploreH1'>Explore destinations</h1>
      <h2 className='exploreH2'>Not sure where to go? Use our interactive map to find flights to great destinations.</h2>
    </div>
    <div className='exploreInputs'>
      <div className='flyingFromDiv'>
        <label>Flying from</label>
        <input className='flyingFrom' type="text" placeholder='Cleveland CLE' />
      </div>
      <div className='chooseExploreTypeDiv'>
        <label>Search type</label>
        <select className='chooseExploreType' name="chooseExploreType" id="chooseExploreType">
          <option value="">Roundtrip</option>
          <option value="">One Way</option>
        </select>
      </div>
      <div className='maxPriceDiv'>
        <label>Max price</label>
        <input className='maxPrice' type="text" placeholder='$1000' />
      </div>
      <div className='explorBtnDiv'>
        <button className='exploreBtn'>Search</button>
      </div>
      <div className='refineDiv'>
        <FontAwesomeIcon className='faAngleRight fa-lg' icon={faAngleRight} /> Refine search
      </div>
      
    </div>
    <Map />
    <div className='exploreNote'>
      *The prices shown are roundtrip fares and have been available within the last 48hours. 
      Additional baggage fees may apply. Fare prices in miles will include additional taxes and fees.
    </div>
    </div>
  )
}

export default ExploreDest

