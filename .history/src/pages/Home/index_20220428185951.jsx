import React, { useState, useEffect } from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

const [studentName, setStudentName] = useState('');
const [students, setStudents] = useState([]);

function handleAddStudent(){
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
  setStudents(prevState => [...prevState, newStudent]);
}

useEffect(() => {
  //ações ou aquilo que eu quero que execute
  //[] quais são os estados que nosso useEffect depende 
  fetch('https://api.github.com/users/joaovnogueira')
},[])

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>João</strong>
          <img src="https://github.com/joaovnogueira.png" alt="Foto de perfil" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite um nome..."
        onChange={e => setStudentName(e.target.value)}
      />

      <button 
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>
      
      {
        students.map(student => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time} 
          />
        ))
      }

    </div>

  )

  }
