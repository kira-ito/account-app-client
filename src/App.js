import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState({})
  useEffect(() => {
    fetchBalance()
    console.log(income)
  }, [])

  const fetchBalance = async () => {
    console.log(1)
    const result = await axios.get('https://accout-app-server.herokuapp.com/api/balance')
    const income = await axios.get('https://accout-app-server.herokuapp.com/api/income')
    console.log(result.data)
    setBalance(result.data)
    console.log(income.data)
    setIncome(income.data)
  }

  return (
    <div className="App">
      残高：{balance}
      <h1>Hello World2</h1>
    </div>
  );
}

export default App;
