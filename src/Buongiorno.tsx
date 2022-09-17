import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppConfigContext } from './contexts/AppConfigContext'

export default function Buongiorno() {
  const navigate = useNavigate()
  const appConfig = useAppConfigContext()

  useEffect(() => {
    if (!appConfig.data.jwt) navigate('/login')
  })

  return <Outlet />
}
