import React, { useState } from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

const [studentName, setStudentName] = useState('');
const [students, setStudents] = useState([]);

  return (
    <div className="container">

      <h1>Lista de presença</h1>

      <input 
        type="text" 
        placeholder="Digite um nome..."
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button">Adicionar</button>
      
      {
        students.map(student)
        <Card name="Paulinho" time="10:55:25" />
      }

    </div>

  )

  }
