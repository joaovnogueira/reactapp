import { useState } from 'react'

function App() {
  const [, setCount] = useState(0)

  return (
    <h1>Lista de presença</h1>
    <input type="text" placeholder="Digite um nome"/>
  )
}

export default App
