import investment from "../src/assets/investment-Calculator-logo.png"
import Result from "./Components/Result"
import UserInput from "./Components/UserInput"


function App() {
  return (
    <div id="header">
      <img src= {investment} alt="investmentlogo" />
      <h1>Investment Calculator</h1>
      <UserInput />
      <Result />
    </div>
  )
}

export default App
