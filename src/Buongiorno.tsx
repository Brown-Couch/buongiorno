import { Outlet } from 'react-router-dom'
import useAuth from './hooks/useAuth'

export default function Buongiorno() {
  useAuth()

  return <Outlet />
}
