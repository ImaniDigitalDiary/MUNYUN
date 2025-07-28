import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import SearchLinksFooter from '../components/SearchLinksFooter'
import HomepageFooter from '../components/homepage-components/HomepageFooter'

// STYLING
import '../styling/mile-plus.css'
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

// IMAGES
import planeTicket from '../images/mile-plus-images/plane-ticket.svg'
import calendar from '../images/mile-plus-images/calendar.svg'
import plane from '../images/mile-plus-images/plane.svg'
import ticket from '../images/mile-plus-images/ticket.svg'

function MileagePlusPage() {
  return (
    <div>  
        <Navbar /> 
      <div className="milePlusMain">
        <div className="steps">
            <div className="one">
                <button className='oneBtn'>1</button>
                About me
            </div>
            <div className="two">
                <button className='twoBtn'>2</button>
                Address
            </div>
            <div className="three">
                <button className='threeBtn'>3</button>
                Security
            </div>
        </div>
        <div className="milePlusHeadText">
            <h1>Create account</h1>
            <p>Start your MileagePlus adventure today. Our loyalty program is free to join and the miles you earn 
                will never expire. We reward you travel and regular activities, so you can earn miles every day of the year.
            </p>
        </div>
        <div className="memberDiv">
            <div className="memberTextAndIcon">
                <FontAwesomeIcon icon={faBookmark} />
                <h3>Already a member?</h3>
            </div>
            <button className='memberBtn'>Sign in</button>
        </div>

        <div className="memberImagesDiv">
            <div className="memberImgDiv">
                <img className='memberImg' src={planeTicket} alt="ticket illustration" />
                <h6>Earn and redeem miles</h6>
            </div>
            <div className="memberImgDiv">
                <img className='memberImg' src={calendar} alt="calendar illustration" />
                <h6>Miles never expire</h6>
            </div>
            <div className="memberImgDiv">
                <img className='memberImg' src={plane} alt="window illustration" />
                <h6>Easily save & manage trips</h6>
            </div>
        </div>

        <div className="aboutYourselfDiv">
            <h3>Tell us about yourself</h3>
            <div className="aboutYourselfPara">
                <p>To start, we need to know more about you. We'll use this information to confirm your identity at the end of the sign-up process.            </p> 
                <p>All fields are required unless indicated otherwise.</p>
            </div>
            
            <hr />

            {/* CONTACT DIV */}
            <div className="contactDiv">
                <h4>1. Contact information</h4>
                <div className="contactInputDiv">
                    <label htmlFor="email" className='email'>
                        Email address
                        <input className='contactInput' type="text" />
                    </label>

                    <label htmlFor="phoneNumber" className='phoneNumber'>
                        Phone number
                        <input className='contactInput' type='number' />
                    </label>
                    
                </div>
            

            {/* checkboxes */}
            <div className="contactCheckboxesDiv">
                <label htmlFor="">
                    <input className='contactCheckbox' type="checkbox" name="" id="" />
                    I would like to receive MileagePlus marketing emails.
                </label>
                <label htmlFor="">
                    <input className='contactCheckbox'  type="checkbox" name="" id="" />
                    Send me updates on my flights when I travel.
                </label>
                    <p>Selecting <span>'Send me updates on my flights when I tavel'</span> indicates that you consent to receiving automated
                        text and/or email messages concerning flight status updates or notifications. Message and data rates may apply.
                    </p>
            </div>
        </div>

        <hr />

        <div className="personalInfoDiv">
            <h4>2. Personal information</h4>
            <p>Your name, date of birth and gender must match the government-issued ID you use to travel.</p>
            <div className="peronsalInfoInputsDiv1">
                 
                <div className="infoInputsDiv1">
                    <label className='div1 title' htmlFor="">
                        Title (optional)
                        <select className='selectTitle' name ="" id="">
                            <option value="">Select a title</option>
                            <option value="">Dr.</option>
                            <option value="">Prof.</option>
                            <option value="">Rev.</option>
                            <option value="">Miss</option>
                            <option value="">Mr.</option>
                            <option value="">Mrs.</option>
                            <option value="">Sir</option>
                            <option value="">Sister</option>
                            <option value="">Not Selected</option> 
                        </select>
                    </label>
                </div>
                
                <div className="infoInputsDiv2">
                    <label  className='div1 first' htmlFor="">
                        First name
                        <input type="text" name="" id="" />
                    </label>
                </div>

                <div className="infoInputsDiv3">
                    <label className='div2 middle' htmlFor="">
                        Middle name/initial (optional)
                        <input type="text" placeholder='(as shown on ID)' />
                    </label>
                </div>

                <div className="infoInputsDiv4">
                    <label className='div2 last' htmlFor="">
                        Last name 
                        <input type="text" />
                    </label>
                    </div>
                </div>


                <div className="peronsalInfoInputsDiv2">
                    <label  className='div3' htmlFor="">
                        Suffix (optional)
                        <select className='suffix' name='suffix' id="">
                            <option value="">DDS</option>
                            <option value="">Dr</option>
                            <option value="">ESQ</option>
                            <option value="">II</option>
                            <option value="">III</option>
                            <option value="">IV</option>
                            <option value="">Jr</option>
                            <option value="">MD</option>
                            <option value="">PHD</option>
                            <option value="">RN</option>
                            <option value="">Sr</option>
                            <option value="">V</option>
                        </select>
                    </label>

                    <div className="div4 dobDiv">
                        Date of birth
                        <div className="dob">
                            <label htmlFor="month">
                                <select className='month' name="month" id="month">
                                    <option value="">Month</option>
                                    <option value="">01 - January</option>
                                    <option value="">02 - February</option>
                                    <option value="">03 - March</option>
                                    <option value="">04 - April</option>
                                    <option value="">05 - May</option>
                                    <option value="">06 - June</option>
                                    <option value="">07 - July</option>
                                    <option value="">08 - August</option>
                                    <option value="">09 - September</option>
                                    <option value="">10 - October</option>
                                    <option value="">11 - November</option>
                                    <option value="">12 - December</option>
                                </select>
                            </label>
                            <label htmlFor="date">
                                <input className='date' type="text" placeholder='DD' />
                            </label>
                            <label htmlFor="year">
                                <input className='year' type="text" placeholder='YYYY' />
                            </label>

                        </div>
                    </div>

                    <div>
                        <label className='div5' htmlFor="gender">
                            Gender
                            <select className='gender' name="" id="">
                                <option value="">Select a gender</option>
                                <option value="">Male (M)</option>
                                <option value="">Female (F)</option>
                                <option value="">Unspecified (X)</option>
                                <option value="">Undisclosed (U)</option>
                            </select>
                        </label>
                    </div>
                </div>         
        </div>            
        </div>

        <div className="personalInfoBtns">
            <button className='contBtn'>Continue</button>
            <button className='cancelBtn'>Cancel</button>
        </div>
      </div>

      <SearchLinksFooter />
      <HomepageFooter />
    </div>
  )
}

export default MileagePlusPage
