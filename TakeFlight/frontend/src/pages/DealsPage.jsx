import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import SearchLinksFooter from '../components/SearchLinksFooter'
import HomepageFooter from '../components/homepage-components/HomepageFooter'

// IMAGES
import chicagoImg from '../images/deals-images/chicago.jpg'
import houstonImg from '../images/deals-images/houston.jpg'
import newYorkImg from '../images/deals-images/new-york.jpg'
import sanFranImg from '../images/deals-images/sanfran.jpg'
import laImg from '../images/deals-images/los-angeles.jpg'
import denverImg from '../images/deals-images/denver.jpg'

// STYLING
import '../styling/deals.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faPlane } from '@fortawesome/free-solid-svg-icons'
    import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
    import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

function DealsPage() {
  return (
    <div className='dealsWrapper'>
        <Navbar />
        <div className="dealsMain">
            <div className="dealsHeadingDiv">
                <h1>Travel deals</h1>
                <p>Enjoy discounts on over 4,500 flights to 300+ destinations.
                Some Take Flight deals also let you earn extra miles.
                </p>
            </div>
            
            
            <div className="dealsOfferLinksDiv">
                <div className="dealsOfferLinks">
                <div className="specialOffers">
                    <div className="specDiv">
                        <FontAwesomeIcon icon={faPlane} className='fa-xl' />
                        <a href="#">Special flight offers</a>
                    </div>
                    <FontAwesomeIcon icon={faArrowDown} className='fa-xl' />
                </div>

                <div className="otherOffers">
                    <div className="otherDiv">
                        <FontAwesomeIcon icon={faBagShopping} className='fa-xl' />
                        <a href="#">Other offers</a>
                    </div>
                    <FontAwesomeIcon icon={faArrowDown} className='fa-xl' />
                </div>
            </div>
            <h3>Special flight offers</h3>
            <p>You can explore our current flight offers and promotions using our <span><a href="#">search tool</a></span>.</p>
            </div>

            <div className="ongoingDealsDiv">
                <h5>On-going deals</h5>
                {/* IMAGES */}
                <div className="ongoingDealsImages">
                    <div className="dealsImgDiv chicago">
                        <img src={chicagoImg} alt="Chicago" className='dealsImg' />
                        <a href="#">Flights from Chicago</a>
                    </div>
                    <div className="dealsImgDiv houston">
                        <img src={houstonImg} alt="Houston" className="dealsImg" />
                        <a href="#">Flights from Houston</a>
                    </div>
                    <div className="dealsImgDiv newyork">
                        <img src={newYorkImg} alt="New York City" className="dealsImg" />
                        <a href="#">Flights from New York City</a>
                    </div>
                    <div className="dealsImgDiv sanfran">
                        <img src={sanFranImg} alt="San Francisco" className="dealsImg" />
                        <a href="#">Flights from San Francisco</a>
                    </div>
                    <div className="dealsImgDiv la">
                        <img src={laImg} alt="Los Angeles" className="dealsImg" />
                        <a href="#">Flights from Los Angeles</a>
                    </div>
                    <div className="dealsImgDiv denver">
                        <img src={denverImg} alt="Denver" className="dealsImg" />
                        <a href="#">Flights from Denver</a>
                    </div>
                </div>
                <p className='offersPara'>*Special offer prices are nonrefundable, except during the first 24 hours after purchase. 
                    Tickets might also need to be bought in advance. Find more information on special offers in the 
                    <span><a href="#"> terms and conditions.</a></span>
                </p>
            </div>
        </div>

        <SearchLinksFooter />
        <HomepageFooter />
    </div>
  )
}

export default DealsPage
