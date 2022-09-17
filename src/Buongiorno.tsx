import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from './contexts/UserContext'

export default function Buongiorno() {
  const navigate = useNavigate()
  const user = useUserContext()

  useEffect(() => {
    if(!user.jwt)
      navigate('/login')
  })

  return (
    <>
      <Outlet />
    </>
  )
}
