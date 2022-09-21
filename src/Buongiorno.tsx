import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppConfigContext } from './contexts/AppConfigContext'
import { toast } from 'react-toastify'

export default function Buongiorno() {
  const navigate = useNavigate()
  const appConfig = useAppConfigContext()

  useEffect(() => {
    if (!appConfig.data.jwt) navigate('/login')
  })

  if(false) {
    const fetchUser = () => {
      const request = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${appConfig.data.jwt}`,
        },
      }

      fetch('http://localhost:3000/user', request)
        .then(async (response) => {
          const payload = await response.json()

          if (!response.ok) return Promise.reject(payload.errors)

          return payload
        })
        .then((data) => {
          appConfig.setData({
            ...appConfig.data,
            userName: data.user_name,
          })

          toast.success(`Fetched: ${appConfig.data.userName}`)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return <Outlet />
}
