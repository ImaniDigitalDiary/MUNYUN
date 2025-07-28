import React from 'react'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function SearchLinksFooter() {
  return (
    <div className='searchTopicsLinksDiv'>
      <div className='searchTopicsLinksMainFooter'>
              <div>
                  <ul className='searchlinksFooter'>
                      <li> About Take Flight <FontAwesomeIcon icon={faChevronDown} /></li>
                      <li> Products and services <FontAwesomeIcon icon={faChevronDown} /></li>
                      <li> Popular destinations <FontAwesomeIcon icon={faChevronDown} /></li>
                      <li> Careers <FontAwesomeIcon icon={faChevronDown} /></li>
                      <li><FontAwesomeIcon icon={faCircleInfo} className='faCircleInfo' /> Important notices</li>
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default SearchLinksFooter
