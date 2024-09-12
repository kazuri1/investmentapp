import React, { useState } from 'react'

const UserInput = () => {
 const [userInput,setUserInput] =  useState({    
    initialInvestment: 10000,
    annualInvestment: 20000,
    expectedReturns : 6,
    Duration: 12
  }
  )
  function handleChange(newValue,inputIdentifier){
    setUserInput(prevUserInput=>{ 
      return{ ...prevUserInput,[inputIdentifier]:newValue
      }
    });
  }
  return (
    <div id = "user-input">
        <div>
        <span className='input-group'>
            <span><label>Initial Investment</label><input onChange={(event)=>handleChange('initialInvestment',event.target.value)} type='number' value={"100000"} /> </span>  
            <span><label>Annual Investment</label><input type='number' value={value} /> </span>       
        </span>
        </div>
        <div>
        <span className='input-group'>
            <span><label>Expected Return</label><input type='number' value={"100000"} /> </span>  
            <span><label>Duration</label><input type='number' value={"200000"} /> </span>       
        </span>
        </div>
        </div>
  )
}

export default UserInput
