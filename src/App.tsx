import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [jwt, setJwt] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth: {
          email: email,
          password: password
        }
      })
    }

    fetch('http://localhost:3000/authentication/login', request)
      .then(async response => {
        const payload = await response.json();

        if(!response.ok)
          return Promise.reject(payload.errors);

        return payload;
      })
      .then(data => {
        setJwt(data.access_token.jwt);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <input type="text"
        onChange={handleEmailChange} />
      <input type="password"
        onChange={handlePasswordChange} />
      <input type="submit"
        onClick={handleLogin}/>

      JWT: {jwt}
    </div>
  )
}

export default App
