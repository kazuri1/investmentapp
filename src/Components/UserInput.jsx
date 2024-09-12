import React, { useState } from 'react'

const UserInput = () => {
 const [userInput,setUserInput] =  useState({    
    initialInvestment: 10000,
    annualInvestment: 20000,
    expectedReturns : 6,
    duration: 12
  }
  )
  function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput=>{ 
      return{ ...prevUserInput,[inputIdentifier]:newValue
      }
    });
  }
  return (
    <div id = "user-input">
        <div>
        <span className='input-group'>
            <span><label>Initial Investment</label><input onChange={(event)=>handleChange('initialInvestment',event.target.value)} type='number' value={userInput.initialInvestment} /> </span>  
            <span><label>Annual Investment</label><input onChange={(event)=>handleChange('annualInvestment',event.target.value)} type='number' value={userInput.annualInvestment} /> </span>       
        </span>
        </div>
        <div>
        <span className='input-group'>
            <span><label>Expected Return</label><input onChange={(event)=>handleChange('expectedReturn',event.target.value)} type='number'value={userInput.expectedReturns} /> </span>  
            <span><label>Duration</label><input onChange={(event)=>handleChange('duration',event.target.value)}type='number'value={userInput.duration} /> </span>       
        </span>
        </div>
        </div>
  )
}

export default UserInput
