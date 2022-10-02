import React, { useState, useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { authenticationLogin } from '../api/auth'
import { toast } from 'react-toastify'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { jwtState } from '../atoms/auth'

export default function Login() {
  const navigate = useNavigate()
  const jwt = useRecoilValue(jwtState)
  const setJwt = useSetRecoilState(jwtState)

  useEffect(() => {
    if (jwt) navigate('/dashboard')
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handleLogin = (event: any) => {
    event.preventDefault()
    authenticationLogin(email, password)
      .then((data) => {
        setJwt(data.access_token.jwt)
        localStorage.setItem('jwt', data.access_token.jwt)

        toast.success('Welcome!')
        navigate('/dashboard')
      })
      .catch((error) => {
        toast.error('Woops!')
        console.error(error)
      })
  }

  return (
    <div id="sign-up">
      <div className="sign-up-form">
        <div className="sign-up-title">
          <h2>Welcome back</h2>
          <h3>Glad to have you back. Please enter your details.</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="control-option">
            <input type="checkbox" name="rememberMe" />
            <label htmlFor="rememberMe">Remember for 30 days</label>
          </div>
          <div className="control-option">
            <a href="/change_me">Forgot your password?</a>
          </div>
          <div className="control control-submit">
            <input type="submit" value="Sign in" className="sign-in" />
          </div>
          <div className="trailer-text">
            <p>
              Don't have an account? <span>Join the Brown Couch</span>
            </p>
          </div>
        </form>
      </div>
      <div className="sign-up-decoration">
        <div className="decoration-text-frame">
          <div className="decoration-quote">
            <blockquote>
              "The Brown Couch me ayuda a avanzar en mi carrera profesional no
              sólo con herramientas de idioma, sino también como un networking"
            </blockquote>
            <p className="quote-name">Diana Lizárraga, Rettig</p>
            <p className="quote-title">CFO</p>
          </div>
        </div>
      </div>
    </div>
  )
}
