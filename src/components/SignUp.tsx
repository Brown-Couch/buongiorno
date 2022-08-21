import React, { useState } from 'react'
import './SignUp.css'
import InputText from './InputText'
import Password from './Password'

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        registration: {
          name: firstName,
          email: lastName,
          password: password
        }
      })
    }

    fetch('http://localhost:3000/registration/with_credentials', request)
      .then(async response => {
        const payload = await response.json()

        if(!response.ok)
          return Promise.reject(payload.errors)

        return payload;
      })
      .then(data => {
        console.log(data);
      })
      .catch(errors => {
        console.error(errors);
      })
  }

  return (
    <div id="sign-up">
      <div className="sign-up-form">
        <div className="sign-up-title">
          <h2>Join us at our Brown Couch</h2>
          <h3>It's very, very brown.</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <InputText name="firstName"
            label="First Name"
            value={firstName}
            handler={setFirstName}
            placeholder="Enter your first name" />
          <InputText
            name="lastName"
            label="Last Name"
            value={lastName}
            handler={setLastName}
            placeholder="Enter your last name" />
          <InputText
            name="email"
            label="Email"
            value={email}
            handler={setEmail}
            placeholder="Enter your email" />
          <Password
            handler={setPassword} />
          <div className="control">
            <input type="submit"
                   className="sign-in"
                   value="Sign up" />
          </div>
        </form>
      </div>
      <div className="sign-up-decoration">
        <div className="decoration-text-frame">
          <div className="decoration-quote">
            <blockquote>"The Brown Couch me ayuda a avanzar en mi carrera profesional no sólo con herramientas de idioma, sino también como un networking"</blockquote>
            <p className="quote-name">Diana Lizárraga, Rettig</p>
            <p className="quote-title">CFO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
