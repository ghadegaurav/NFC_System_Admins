import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <button onClick={handleSubmit}>Get Data</button>
      <ul>
        {schemearray.map((item, index) => (
          <>
            <li >{item['name']} {item['max_deduction']}</li>
      
          </>
        ))}
      </ul>
    </>
  )
}

export default App
