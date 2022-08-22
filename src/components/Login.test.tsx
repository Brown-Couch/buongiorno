import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './Login'

test('render the login page', () => {
  render(<Login />)
  const linkElement = screen.getByText(/Welcome back/i)
  expect(linkElement).toBeInTheDocument()
})
