import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserContextProvider, { useUserContext } from './contexts/UserContext'

export default function App() {
  const navigate = useNavigate()
  const user = useUserContext()

  useEffect(() => {
    if(!user.jwt)
      navigate('/login')
  })

  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  )
}
