import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Lista de presença</h1>
    <input type="text" placeholder="Lista de presença"/>
  )
}

export default App
