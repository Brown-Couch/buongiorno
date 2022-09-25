import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppConfigContext } from './contexts/AppConfigContext'
import { fetchUser } from './api/auth'

export default function Buongiorno() {
  const navigate = useNavigate()
  const appConfig = useAppConfigContext()

  useEffect(() => {
    if (!appConfig.data.jwt) navigate('/login')
    if (appConfig.data.jwt && !appConfig.data.userName) {
      fetchUser(appConfig)
        .then((data: any) => {
          appConfig.setData({
            ...appConfig.data,
            userName: data.name,
          })
        })
        .catch((error: any) => {
          console.error(error)
        })
    }
  })

  return <Outlet />
}
