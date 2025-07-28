import React, { useState} from 'react'

function Travelers() {
    const [travelerCount, setTravelerCount] = useState(0)
    

    // add traveler
    function countAdd() {
        setTravelerCount(prev => prev + 1)
    }

    // remove traveler
    function countRemove() {
        // prev is current count for travelers which is passed in React automatically
        // prev > 0 is my condition for the ternary operator and is checking if the current count is greater than 0
        // prev - 1 ---> if the condition is true, take the currentCount and subtract 1 from the current count
        // 0 ---> if the condition is false, set value to 0
        setTravelerCount(prev => ( prev > 0 ? prev - 1 : 0 ))
    }

    
  return (
    // <div className='travComp'>
        <div className='travComp'>
            <label htmlFor="dates" className='travsHeading'>
                Travelers
            </label>
            <div className='travDiv'>
                {/* <button className='add' onClick={countAdd}>+</button> */}
                <input id='travInput' className='travInput' type='text' value={travelerCount} />
                {/* <button className='subtract' onClick={countRemove}>-</button> */}
            </div>
        </div>
        
        
      
    // </div>
  )
}

export default Travelers
