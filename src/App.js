import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    fetchBalance()
  }, [])

  const fetchBalance = async () => {
    console.log(1)
    const result = await axios.get('https://accout-app-server.herokuapp.com/api/balance')
    console.log(result.data)
    setBalance(result.data)
  }

  return (
    <div className="App">
      残高：{balance}
      <h1>Hello World2</h1>
    </div>
  );
}

export default App;
