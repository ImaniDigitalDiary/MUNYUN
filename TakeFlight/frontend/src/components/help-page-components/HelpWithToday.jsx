import React, {useState} from 'react'

// STYLING\
import './help-page-styling/help-with-today.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// individual components for each button
const AccessibilityAndAssistance = () => (
    <>
    <div className='divMain'>
        <div className='headingDiv'>
            <h3>Accessibility and assistance</h3>
            <p>What to know when you're traveling with a wheelchair, a service dog or need extra assisstance with your trip.</p>
        </div>
    <ul>
        <li>Wheelchair Assistance</li>
        <p>How to request and info on checking yours</p>

        <li>Accessible travel</li>
        <p>See how we help travelers who need extra assistance</p>

        <li>Service dogs</li>
        <p>Guidelines, policies, how to add a service dog to your profile</p>

        <li>Social story</li>
        <p>View every step of the flying process so you know what to expect</p>
        
        <li>Accessibility</li>
        <p>See our policy and commitment to accessibility</p>

        <li>Accessible seating</li>
        <p>Request accessible seats for travelers with disabilities</p>

        <li>Oxygen</li>
        <p>What to do if you need to bring oxygen on board</p>
    </ul>
    </div>
    </>
    
)

const Baggage = () => (
    <>
    <div className='headingDiv'>
        <h3>Baggage</h3>
        <p>Answers to your questions about checking, carrying on, paying for and tracking your bags.</p>
    </div>
    
    <ul>
        <li>Baggage fee calculator</li>
        <p>See what it will cost to check your bags</p>

        <li>Carry-on bags</li>
        <p>See which bags can join you on board</p>

        <li>Checked bags</li>
        <p>Learn more about our checked bag policies</p>

        <li>Damaged or delayed bags</li>
        <p>Submit a claim or trace baggage</p>

        <li>Claim status</li>
        <p>See the status of a baggage claim you filed</p>

        <li>Lost items</li>
        <p>How to report and follow up on missing items</p>

        <li>Bag info</li>
        <p>Find out more about our bag policies</p>
    </ul>
    </>
)

const Booking = () => (
    <>
    <div className='headingDiv'>
        <h3>Booking a trip</h3>
        <p>Find out everything you need to know, from booking a flight to using travel credits.</p>
    </div>
    
    <ul>
        <li>Book a flight</li>
        <p>Let's get started with a new trip</p>

        <li>Flexible booking options</li>
        <p>Answers to common questions about booking flights</p>

        <li>Sustainable travel</li>
        <p>Learn about Take Flight's carbon offset program and how you can participate</p>

        <li>Insurance</li>
        <p>Learn more about tracel insurance</p>

        <li>Travel credits</li>
        <p>Learn more about the different types and how to use them</p>

        <li>FareLock</li>
        <p>See how to reserve your trip now and pay later</p>
    </ul>
    </>
)

const ChildrenAndInfants = () => (
    <>
    <div className='headingDiv'>
        <h3>Children and infants</h3>
        <p>Tips and information if you'll be traveling with little ones.</p>
    </div>

    <ul>
        <li>Traveling with children</li>
        <p>Tips for travel with little ones</p>

        <li>Traveling while pregnant</li>
        <p>Safe travel tips with a baby on the way</p>

        <li>Minors traveling alone</li>
        <p>Policies and procedures for young children traveling on their own</p>

        <li>Baggage for infants</li>
        <p>What you can bring on board for free and what you need to check</p>
    </ul>
    </>
)

const CustomerCare = () => (
    <>
    <div className="headingDiv">
        <h3>Customer care</h3>
        <p>Share your feedback or get in touch.</p>
    </div>

    <ul>
        <li>Customer care</li>
        <br />
        <li>Reimbursements</li>
        <p>Request reimbursements for expenses caused by delayed or canceled flights</p>
    </ul>
    </>
)

const DigitalTrustCenter = () => (
    <>
    <div className="headingDiv">
        <h3>Digital Trust Center</h3>
        <p>Learn about Take Flight's commitment to the transparent use of your data and your data privacy rights.</p>
    </div>

    <ul>
        <li>How does Take Flight use and protect my personal data?</li>
        <p>Understand the types of data collected, how it is used and where to manage your data preferences</p>

        <li>Privacy Policy</li>
        <p>Learn more about our legal policies around data privacy</p>
    </ul>
    </>
)

const HelpWithTrips = () => (
    <>
    <div className="headingDiv">
        <h3>Help with trips</h3>
        <p>See how to check in for flights, watch your flight's status, register for TSA PreCheck and more.</p>
    </div>
    
    <ul>
        <li>TSA PreCheck</li>
        <p>Get through security faster with a Known Traveler Numbers</p>

        <li>Global Entry</li>
        <p>Make international travel easier</p>

        <li>Changing or canceling a trip</li>
        <p>What to do when your plans change</p>

        <li>Missed, delayed and canceled flights</li>
        <p>What to do if there's a change to your flight's schedule</p>

        <li>Flight status</li>
        <p>Check your flight time, standby list position and more</p>

        <li>Check-in</li>
        <p>What you need, and when and how to do it</p>

        <li>Travel alerts</li>
        <p>Check for any travel-related alerts or waivers</p>

        <li>What to expect</li>
        <p>Learn what to expect when you get to the airport</p>

        <li>COVID-19 guidelines</li>
        <p>Find the latest travel policies and restrictions</p>
    </ul>
    </>
)

const HotelCarPackages = () => (
    <>
    <div className="headingDiv">
        <h3>Hotels, Cars, Cruises and Vacation packages</h3>
        <p>Support with everything you'll need and want to do once you're off the plane.</p>
    </div>
    
    <ul>
        <li>Take Flight Packages</li>
        <p>Information and booking</p>

        <li>Car rentals</li>
        <p>Information and reservations</p>

        <li>Take Flight Hotels</li>
        <p>Book a room or see your reservation</p>

        <li>Take Flight Cruises</li>
        <p>Information and tickets</p>
    </ul>
    </>
)

const InternationalTravel = () => (
    <>
    <div className="headingDiv">
        <h3>International travel</h3>
        <p>What you need to bring if you're traveling abroad.</p>
    </div>

    <ul>
        <li>International travel documents</li>
        <p>Learn what documents you need for your trips</p>

        <li>Travel requirements</li>
        <p>Helpful links and destination informaiton for your international trip</p>
    </ul>
    </>
)

const MyMileagePlus = () => (
    <>
    <div className="headingDiv">
        <h3>My MileagePlus account</h3>
        <p>Update your account info, check on your award miles balance, help accessing your account and more.</p>
    </div>
    
    <ul>
        <li>TravelBank</li>
        <p>What you need to know and how to use it</p>

        <li>Forgot MileagePlus number</li>
        <p>Help locating your account info</p>

        <li>Name change</li>
        <p>How to change the name in your account</p>

        <li>Locked account</li>
        <p>Help getting back into your account</p>

        <li>Join MileagePlus</li>
        <p>See how to sign up and start earning when you fly</p>

        <li>Premier</li>
        <p>See how close you are to qualifying</p>

        <li>Missing miles</li>
        <p>Request to add credits to your account</p>

        <li>Buy or transfer miles</li>
        <p>Get more miles for you or a friend whenever you want</p>

        <li>MileagePlus Service Center</li>
        <p>Your one-stop shop for all account support</p>

        <li>Contact info</li>
        <p>Get additional help</p>
    </ul>
    </>
)

const RefundsAndReceipts = () => (
    <>
    <div className="headingDiv">
        <h3>Refunds and receipts</h3>
        <p>Request a refund, check the status of one or search for a receipt.</p>
    </div> 

    <ul>
        <li>Refund policy</li>
        <p>Find out if you qualify for a refund</p>

        <li>Refund requests</li>
        <p>Request a refund or check the status of one</p>

        <li>Reimbursements</li>
        <p>Request reimbursement for expenses caused by delayed for canceled flights</p>

        <li>Reimbursements</li>
        <p>Request reimbusement for delayed or lsot bags</p>

        <li>Search receipts</li>
        <p>Get a copy of your receipt</p>
    </ul>
    </>
)

const SeatsAndUpgrades = () => (
    <>
    <div className="headingDiv">
        <h3>Seats and upgrades</h3>
        <p>We're here to help you find your favorite seat and fly in comfort.</p>
    </div>
    
    <ul>
        <li>Seat options</li>
        <p>See all our seat types and cabin options</p>

        <li>Change seats</li>
        <p>How to pick a different one</p>

        <li>Basic Economy</li>
        <p>See more about your ticket</p>

        <li>Economy Plus</li>
        <p>See what this fare gives you</p>

        <li>Upgrades</li>
        <p>Everything you need to know</p>

        <li>Upgrade with miles</li>
        <p>How to redeem your award miles</p>
    </ul>
    </>
)

const SpecialtyDesks = () => (
    <>
    <div className="headingDiv">
        <h3>Specialty desks</h3>
        <p>Information for traveling with groups, for business meetings or using Take Flight PerksPlus.</p>
    </div>
    
    <ul>
        <li>Traveling with groups</li>
        <p>Servies, pricing and other informaiton on Take Flight Groups</p>

        <li>Traveling for meetings</li>
        <p>Services, pricing and other informaiton on Take Flight Meetings</p>

        <li>Take Flight PerksPlus</li>
        <p>See how your company can earn points and rewards with us</p>
    </ul>
    </>
)

const TravelingWithPets = () => (
    <>
    <div className="headingDiv">
        <h3>Traveling with pets</h3>
        <p>Everything you need to know before you bring your four-legged friend on board.</p>
    </div>

    <ul>
        <li>In-cabin pets
        <div>See how and if you can fly with your pet</div>
        </li>
        
    </ul>
    </>
)

const TakeFlightClub = () => (
    <>
    <div className="headingDiv">
        <h3>Take Flight Club and lounges</h3>
        <p>See how to check in for flights, watch your flight's status, register for TSA PreCheck and more.</p>
    </div>
    
    <ul>
        <li>Hours</li>
        <p>See when Take Flight locations and lounges are open</p>

        <li>Access</li>
        <p>How you can get into a Take Flight Club location or enjoy the lounge</p>

        <li>Visiting Take Flight Club and lounge locations</li>
        <p>How to buy memberships and one-time passes</p>
    </ul>
    </>
)

    // ****Map string keys to JSX components****
    const contentMap = {
        'Accessibility and assistance': <AccessibilityAndAssistance />,
        'Baggage': <Baggage />,
        'Booking': <Booking />,
        'Children and infants': <ChildrenAndInfants />,
        'Customer care': <CustomerCare />,
        'Digital trust center': <DigitalTrustCenter />,
        'Help with trips': <HelpWithTrips />,
        'Hotels, Cars, Cruises and Vacation packages': <HotelCarPackages />,
        'International travel': <InternationalTravel />,
        'MyMileagePlus account': <MyMileagePlus />,
        'Refunds and receipts': <RefundsAndReceipts />,
        'Seats and upgrades': <SeatsAndUpgrades />,
        'Specialty desks': <SpecialtyDesks />,
        'Traveling with pets': <TravelingWithPets />,
        'Take Flight Club and lounges': <TakeFlightClub />
    }

const HelpWithToday = () => {
  const [selectedTopic, setSelectedTopic] = useState("Accessibility and assistance");
    console.log(contentMap[selectedTopic])
  return (
    <div className="helpMainDiv">
        <div className='helpMainCont'>
            <h1>What can we help you with today?</h1>
        
        
        <div className='mainRightDiv' 
            style={{ 
                display: 'flex',
                justifyContent: 'center'
            }}>
            {/* Sidebar with buttons */}
                <div className='topicBtnDiv' 
                    style={{ 
                        width: "260px", 
                        borderRight: "1px solid #ddd", 
                        padding: "1rem", 
                        }}>
                        {Object.keys(contentMap).map((topic) => (
                        <button
                            className='topicBtn'
                            key={topic}               
                            onClick={() => setSelectedTopic(topic)}
                            style={{
                            textAlign: "left",
                            cursor: "pointer",
                            }}
                        >

                            {topic}
                            {/* font awesome icon for all topics for the right side of topics */}
                            <FontAwesomeIcon icon={faChevronRight}  className='faChevronRight'/>
                        </button>
                        ))}
                </div>
            

            {/* Content area */}
            <div className='contentDiv'>
                {contentMap[selectedTopic]}
            </div>
        </div>
        </div>
    </div>
    
  );
};


export default HelpWithToday
