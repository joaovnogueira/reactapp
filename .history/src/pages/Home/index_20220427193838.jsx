import React, { useState } from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

const [studentName, setStudentName] = useState('Amanda');

  return (
    <div className="container">

      <h1>Nome: {studentName}</h1>

      <input 
        type="text" 
        placeholder="Digite um nome..."
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name={studentName} time="10:55:25" />
      <Card name={studentName} time="10:54:35"/>


    </div>

  )

  }
