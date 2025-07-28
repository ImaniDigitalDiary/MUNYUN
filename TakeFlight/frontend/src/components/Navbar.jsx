import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// logo
import logo from '../images/take-flight-logo.png'

// styling
import '../styling/navbar.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faGlobe,
  faMagnifyingGlass,
  faUserLarge,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <>
      <div className="navbarMainDiv">
        <div className="navbar">
          {/* Logo */}
          <div className="logoContainer">
            <Link to="/home">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={openMenu ? faTimes : faBars} />
          </div>

          {/* Desktop Nav */}
          <ul className="navLinks1">
            <Link className="navLink1 bookLink" to="/book">Book <FontAwesomeIcon className="link1Icon" icon={faChevronDown} /></Link>
            <Link className="navLink1" to="/my-trips">My trips <FontAwesomeIcon className="link1Icon" icon={faChevronDown} /></Link>
            <Link className="navLink1" to="/travel-info">Travel info <FontAwesomeIcon className="link1Icon" icon={faChevronDown} /></Link>
            <Link className="navLink1" to="/mileage-plus">MileagePlus <FontAwesomeIcon className="link1Icon" icon={faChevronDown} /></Link>
            <Link className="navLink1" to="/deals">Deals <FontAwesomeIcon className="link1Icon" icon={faChevronDown} /></Link>
            <Link className="navLink1" to="/help-center">Help <FontAwesomeIcon className="link1Icon" icon={faChevronRight} /></Link>
          </ul>

          {/* Desktop Right Icons */}
          <ul className="navLinks2">
            <li className="navLink2 globe"><FontAwesomeIcon icon={faGlobe} /> English-US$</li>
            <li className="navLink2 link2Icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li className="navLink2 link2Icon"><FontAwesomeIcon icon={faUserLarge} /></li>
            <li className="navLink2 link2Icon"><FontAwesomeIcon icon={faCartShopping} /></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="mobileMenu">
            <Link to="/book" onClick={toggleMenu}>Book</Link>
            <Link to="/my-trips" onClick={toggleMenu}>My Trips</Link>
            <Link to="/travel-info" onClick={toggleMenu}>Travel Info</Link>
            <Link to="/mileage-plus" onClick={toggleMenu}>MileagePlus</Link>
            <Link to="/deals" onClick={toggleMenu}>Deals</Link>
            <Link to="/help-center" onClick={toggleMenu}>Help</Link>
            <hr />
            <Link to="/search" onClick={toggleMenu}>Search</Link>
            <Link to="/profile" onClick={toggleMenu}>Profile</Link>
            <Link to="/cart" onClick={toggleMenu}>Cart</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
