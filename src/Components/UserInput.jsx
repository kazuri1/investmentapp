
const UserInput = ({handleChange, userInput}) => {
 
  
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
