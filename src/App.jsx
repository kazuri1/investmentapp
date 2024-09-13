import {useState} from 'react'
import investment from "../src/assets/investment-Calculator-logo.png"
import Result from "./Components/Result"
import UserInput from "./Components/UserInput"


function App() {
  const [userInput,setUserInput] =  useState({    
    initialInvestment: 10000,
    annualInvestment: 20000,
    expectedReturns : 6,
    duration: 12
  }
  )
     function handleChange(inputIdentifier,newValue){
      setUserInput(prevUserInput=>{ 
        return{ ...prevUserInput,[inputIdentifier]:+snewValue
        }
      });
    }
  return (
    <div id="header">
      <img src= {investment} alt="investmentlogo" />
      <h1>Investment Calculator</h1>
      <UserInput handleChange ={handleChange} userInput = {userInput}/>
      <Result input={userInput} />
    </div>
  )
}

export default App
