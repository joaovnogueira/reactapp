import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

  let studentName = '';

  function handleNameChange(name){
    studentName = name;
  }

  return (
    <div className="container">

      <h1>Nome: {}</h1>
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

