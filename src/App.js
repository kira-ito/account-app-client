import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    fetchBalance()
  }, [])

  const fetchBalance = async () => {
    const result = await axios.get('https://accout-app-server.herokuapp.com//api/balance')
    console.log(result.data)
    setBalance(result.data)
  }

  return (
    <div className="App">
      残高：{balance}
    </div>
  );
}

export default App;
