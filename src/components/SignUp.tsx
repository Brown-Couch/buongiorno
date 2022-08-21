import React, { useState } from 'react'
import './SignUp.css'
import InputText from './InputText'

export default function SignUp() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleField = (field) => {
  };

  return (
    <div id="sign-up">
      <div className="sign-up-form">
        <div className="sign-up-title">
          <h2>Join us at our Brown Couch</h2>
          <h3>It's very, very brown.</h3>
        </div>
        <form action="#">
          <InputText
            fieldName="firstName"
            placeholder="Enter your first name"
            handleField={}/>
          <div className="control">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName"
                   name="lastName"
                   placeholder="Enter your last name"/>
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email"
                   name="email"
                   placeholder="Enter your email"/>
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password"
                   name="password"
                   placeholder="********"/>
          </div>
          <div className="control">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input type="passwordConfirmation"
                   name="passwordConfirmation"
                   placeholder="********"/>
          </div>
          <div className="control">
            <input type="submit"
                   value="Sign up"
                   className="sign-in"/>
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
