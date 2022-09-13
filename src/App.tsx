import { Outlet } from 'react-router-dom'
import UserContextProvider, { useUserContext } from './contexts/UserContext'

export default function App() {
  const user = useUserContext()

  return (
    <UserContextProvider value={{}}>
      <Outlet />
    </UserContextProvider>
  )
}
