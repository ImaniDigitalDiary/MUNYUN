import React, {useState} from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import SearchLinksFooter from '../components/SearchLinksFooter'
import HomepageFooter from '../components/homepage-components/HomepageFooter'

// STYLING
import '../styling/book-page.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


function Book() {
    const [cabinButtonSelected, setCabinButtonSelected] = useState('cabinFirstBtn') // cabin initial button selected
    const [fareButtonSelected, setFareButtonSelected] = useState('fareFirstBtn') // fare initial button selected
    const [flightButtonSelected, setFlightButtonSelected] = useState('flightFirstBtn') // show flights initial button selected



    // CABIN HADLE CHANGE - DIV 1
    const handleChangeToggleBtnDiv1 = (e) => {
        setCabinButtonSelected (e.target.value)
    }

    // FARE HANDLE CHANGE - DIV 2
    const handleChangeToggleBtnDiv2 = (e) => {
        setFareButtonSelected (e.target.value)
    }

    // FLIGHTS HANDLE CHANGE - DIV 3
    const handleChangeToggleBtnDiv3 = (e) => {
        setFlightButtonSelected (e.target.value)
    }
    
  return (
    <div className='bookPage'>
        <Navbar />
        <div className='bookFlightPageMainDiv'>
            <div className="bookFlightPageMainDiv1">
                <h1>Book a flight</h1>
                <div className='signInDiv'>
                    <FontAwesomeIcon icon={faCircleInfo} className='faCircleInfo'/>
                    <a href="signIn" className='signIn'>Sign in</a> to your MileagePlus account for even faster checkout.
                </div>

                <div className="radioBtnsMain">
                    
                    <div className="radioBtnsMainDiv1">
                        <h6>Show trip selection</h6>
                        <div className="radioBtnsDiv1">
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight only</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight + hotel</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight + hotel + cars</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight + car</label>
                            </div>
                        </div>
                    </div>

                    <div className="radioBtnsMainDiv2">
                        <h6>Show price in</h6>
                        <div className="radioBtnsDiv2">
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Money</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Miles</label>
                            </div>
                        </div>
                    </div>

                    <div className="bookPageFormMain">
                        <div className="bookPageFormLinksDiv">
                            <div className="bookPageFormLinks roundTrip">
                                Roundtrip
                            </div>
                            <div className="bookPageFormLinks oneWay">
                                One-way
                            </div>
                            <div className="bookPageFormLinks multiCity">
                                Multi-city
                            </div>
                        </div>

                        <div className="bookPageFormDiv1">
                            <div className="bookPageFromInputDiv1 bookPageFormInputDiv1">
                                <label htmlFor="">From</label>
                                <input className='bookPageFormInput' type="text" placeholder='Cleveland, OH, US (CLE)'/>
                                <div className='bookPageFormCheckbox'>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <span>Search nearby airports</span>
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="bookPageToInputDiv1 bookPageFormInputDiv1">
                                <label htmlFor="">To</label>
                                <input className='bookPageFormInput' type="text" placeholder='City or airport'/>

                                <div className='bookPageFormCheckbox'>
                                    <div>
                                        <input type="checkbox" name="" id="" className='bookPageCheckbox'/>
                                        <span>Search nearby airports</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="" className='bookPageCheckbox'/>
                                        <span>Nonstop only</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bookPageFormDiv2">
                            <div className="bookPageTravInputDiv2 bookPageFormInputDiv2">
                                <label htmlFor="">Select travelers</label>
                                <input className='bookPageFormInput' type="text" placeholder='3 Travelers'/>
                            </div>
                            <div className="bookPageDatesInputDiv2 bookPageFormInputDiv2">
                                <label htmlFor="">Select dates</label>
                                <input className='bookPageFormInput' type="text" placeholder='Date placeholder'/>

                                <div className='bookPageFormCheckbox'>
                                    <div>
                                        <input type="checkbox" name="" id="" className='bookPageCheckbox'/>
                                        <span>Flexible dates</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bookPageFormDiv3">
                            <div className="bookPageTravInputDiv3 bookPageFormInputDiv3">
                                <label htmlFor="">Outbound time of day</label>
                                <input className='bookPageFormInput' type="text" placeholder='Anytime'/>
                            </div>
                            <div className="bookPageDatesInputDiv3 bookPageFormInputDiv3">
                                <label htmlFor="">Return time of day</label>
                                <input className='bookPageFormInput' type="text" placeholder='Anytime'/>
                            </div>
                        </div>
                    </div>              
                </div>


            {/* TOGGLE BUTTONS */}
            {/* TOGGLE BTNS DIV 1 */}
            <div className="toggleBtnDiv1">
                Cabin
                <div className="toggleBtnDiv1Cont">
                    
                    <label className={`radioLabelDiv1  ${cabinButtonSelected === 'cabinFirstBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type="radio" 
                            name="cabinColor" 
                            value='cabinFirstBtn'
                            checked={cabinButtonSelected === 'cabinFirstBtn'}
                            onChange={handleChangeToggleBtnDiv1}
                        />
                        Economy / Premium Economy
                    </label>
                    <label className={`radioLabelDiv1  ${cabinButtonSelected === 'cabinSecondBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type='radio' 
                            name='cabinColor'
                            value='cabinSecondBtn'
                            checked={cabinButtonSelected === 'cabinSecondBtn'}
                            onChange={handleChangeToggleBtnDiv1}
                        />
                        Business / First Class
                    </label>
                </div>
            </div>

            {/* TOGGLE BTNS DIV 2 */}
            <div className="toggleBtnDiv2">
                Type of fare
                <div className="toggleBtnDiv2Cont">
                    <label className={`radioLabelDiv2 ${fareButtonSelected === 'fareFirstBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type='radio'
                            name='fareColor'
                            value='fareFirstBtn'
                            checked={fareButtonSelected === 'fareFirstBtn'}
                            onChange={handleChangeToggleBtnDiv2}
                        />
                        Lowest available fares
                    </label>
                    <label className={`radioLabelDiv2 ${fareButtonSelected === 'fareSecondBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type='radio'
                            name='fareColor'
                            value='fareSecondBtn'
                            checked={fareButtonSelected === 'fareSecondBtn'}
                            onChange={handleChangeToggleBtnDiv2}
                        />
                        Fully refundable
                    </label>
                </div>
            </div>

            {/* TOGGLE BTNS DIV 3 */}
            <div className="toggleBtnDiv3">
                Show flights from
                <div className="toggleBtnDiv3Cont">
                    <label className={`radioLabelDiv3 ${flightButtonSelected === 'flightFirstBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type='radio' 
                            name='flightColor'
                            value='flightFirstBtn'
                            checked={flightButtonSelected === 'flightFirstBtn'}
                            onChange={handleChangeToggleBtnDiv3}
                        />
                        All airlines
                    </label>
                    <label className={`radioLabelDiv3 ${flightButtonSelected === 'flightSecondBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type='radio' 
                            name='flightColor'
                            value='flightSecondBtn'
                            checked={flightButtonSelected === 'flightSecondBtn'}
                            onChange={handleChangeToggleBtnDiv3}
                        />
                        Take Flight Express only
                    </label>
                    <label className={`radioLabelDiv3 ${flightButtonSelected === 'flightThirdBtn' ? 'blue' : 'gray'}`}>
                        <input 
                            type='radio' 
                            name='flightColor'
                            value='flightThirdBtn'
                            checked={flightButtonSelected === 'flightThirdBtn'}
                            onChange={handleChangeToggleBtnDiv3}
                        />
                        TakeStar Alliance airlines
                    </label>
                </div>
            </div>
            <div className="fareClassOptMain">
                <div className="fareClassOptDiv1">
                <div className='fareOptHeading'>Fare class (optional)</div>
                    <div className="fareClassOptInputDiv1">
                        <input 
                            className='fareClassInput'
                            type='text'  placeholder='Examples: Y, B, M'
                        />
                        <div className='fareText'>Searching by fare class may not be combinable with other search 
                            preferences (e.g. upgrades, fare types).
                        </div>
                    </div>                   
                </div>

                <div className="fareClassOptDiv2">
                    <div className='fareOptHeading'>Sort flights by</div>
                    <div className="fareClassOptInputDiv2">
                        <select className='fareSelect' name="fare" id="fare">
                            <option value="">Departure Time</option>
                            <option value="">Travel Time</option>
                            <option value="">Arrival Time</option>
                            <option value="">Number of spots</option>
                        </select>
                    </div>
                </div>

                
            </div>
            </div>


{/* BOOK FLIGHT PAGE MAIN DIV 2 */}
            <div className="bookFlightPageMainDiv2">
                <ul>
                    <h6>Learn more:</h6>
                    <li>Unaccompanied minors</li>
                    <li>Traveling with children</li>
                    <li>Learn about fare classes</li>
                    <li>Request a TakeFlight Groups quore for 10+</li>
                    <li>Pets in cabin</li>
                    <li>Upgrades overview</li>
                    <li>Redeeming a future flight credit</li>
                    <li>Redeeming a certificate</li>
                    <li>Earning miles</li>
                </ul>
            </div>
        </div>

        <SearchLinksFooter />
        <HomepageFooter />

    </div>
    
  )
}

export default Book
