import React, { useState, useEffect } from 'react'
import './styles.css'

import { Card, CardProps } from '../../components/Card'

type ProfileResponse = {
  name: stirng;
  
}

export function Home() {

const [studentName, setStudentName] = useState('');
const [students, setStudents] = useState<CardProps[]>([]);
const [user, setUser] = useState({name: '', avatar:''})

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
  async function fetchData() {
    const response = await fetch("https://api.github.com/users/joaovnogueira");
    const data = await response.json();
    console.log("DADOS =>", data);

    setUser({
      name: data.name,
      avatar: data.avatar_url,
    });
  }

  fetchData();
},[])

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
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
