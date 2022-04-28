import React, { useState } from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

const [studentName, setStudentName] = useState('');
const [students, setStudents] = useState([]);

function handleAddStudent(){
  const newStudent = {
    name: setStudentName,
    time: new Date().toLocaleTimeString9"pt-br"
  }
}

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
        students.map(student => <Card name={student.name} time={student.time} />)

      }

    </div>

  )

  }
