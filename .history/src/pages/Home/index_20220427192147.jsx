import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

  function handleNameChange(name){
    console.log(name);
  }

  return (
    <div className="container">

      <h1>Lista de presença</h1>
      <input 
        type="text" 
        placeholder="Digite um nome..."
        onChange={e => handleNameChange(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="10:54:35"/>


    </div>

  )
}

