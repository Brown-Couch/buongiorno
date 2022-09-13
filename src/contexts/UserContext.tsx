import { createContext, useContext } from 'react'

interface userInterface {
  jwt: string
}

const UserContext = createContext<userInterface>({
  jwt: ''
})

export default function UserContextProvider(props: any) {
  const defaultValue = {
    jwt: ''
  }
  return (
    <UserContext.Provider value={defaultValue}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
