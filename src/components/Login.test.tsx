import { render, screen } from '@testing-library/react'
import Login from './Login'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test('render the login page', () => {
  render(<Login />)
  const linkElement = screen.getByText(/Welcome back/i)
  expect(linkElement).toBeInTheDocument()
})
