import { useNavigate } from 'react-router-dom'
import { fetchUser } from '../api/auth'
import { useRecoilState, useRecoilValue } from 'recoil'
import { jwtState } from '../atoms/auth'
import { userState } from '../atoms/user'

const useAuth = () => {
  const navigate = useNavigate()
  const jwt = useRecoilValue(jwtState)
  const [user, setUser] = useRecoilState(userState)

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
}

export default useAuth
