import { createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext'

const UserContext = createContext({})

export default function App() {
  const user = useContext(UserContext)
  console.log(`User: ${user}`);

  return (
    <UserContextProvider value={{}}>
      <Outlet />
    </UserContextProvider>
  )
}
