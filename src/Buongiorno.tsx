import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { fetchUser } from './api/auth'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { jwtState } from './atoms/auth'
import { userState } from './atoms/user'

export default function Buongiorno() {
  const navigate = useNavigate()
  const jwt = useRecoilValue(jwtState)
  const user = useRecoilValue(userState)
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    if (!jwt) navigate('/login')
    if (jwt && !user) {
      fetchUser(jwt)
        .then((data: any) => {
          setUser(data)
        })
        .catch((error: any) => {
          localStorage.clear()
          setUser({})
          navigate('/login')
          console.error(error)
        })
    }
  })

  return <Outlet />
}
