import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    console.log('https://accout-app-server.herokuapp.com/api/balance')
    const a = axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(a)
    fetchBalance()
  }, [])

  const fetchBalance = async () => {
    const test = await axios.get('/api/balance')
    console.log(test)
    const result = await axios.get('https://accout-app-server.herokuapp.com/api/balance')
    console.log(result.data)

    setBalance(result.data)
  }

  return (
    <div className="App">
      残高：{balance}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
