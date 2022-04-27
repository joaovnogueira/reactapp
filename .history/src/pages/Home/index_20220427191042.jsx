import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite um nome..."/>
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25"/>
      <Card></Card>

    </div>

  )
}

