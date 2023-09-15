import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/register'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)
  const [schemearray, setschemearray] = useState([])
  const handleSubmit = async (event) => {
    console.log("in Submit")

    let getReq = await fetch('/api/scheme')
    let res = await getReq.json()
    setschemearray(res)
    console.log(res)
  }
  return (
    <>

      <div className="app">
        {/* <Login /> */}
        <Register />
      </div>
    </>
  )
}

export default App
