import React from 'react'

const UserInput = () => {
  return (
    <div id = "user-input">
        <div>
        <span className='input-group'>
            <span><label>Initial Investment</label><input value={"100000"} /> </span>  
            <span><label>Annual Investment</label><input value={"200000"} /> </span>       
        </span>
        </div>
        <div>
        <span className='input-group'>
            <span><label>Expected Return</label><input value={"100000"} /> </span>  
            <span><label>Duration</label><input value={"200000"} /> </span>       
        </span>
        </div>
        </div>
  )
}

export default UserInput
