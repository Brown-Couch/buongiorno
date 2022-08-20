import React, { useState, useEffect } from 'react'
import UserList from './components/UserList'
import Appointments from './components/Appointments'
import './App.css'

function App() {
  const [jwt, setJwt] = useState('')

  useEffect(() => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth: {
          email: 'test@example.com',
          password: 'test'
        }
      })
    }

    fetch('http://localhost:3000/authentication/login', request)
      .then(response => response.json())
      .then(data => setJwt(data.access_token.jwt));

    console.log(jwt);
  })

  return (
    <div className="App">
      <UserList />
      <Appointments />
    </div>
  )
}

export default App
