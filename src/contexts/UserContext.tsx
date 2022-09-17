import { createContext, useContext } from 'react'

interface userInterface {
  jwt: string
}

const UserContext = createContext<userInterface>({
  jwt: 'default',
})

export default function UserContextProvider(props: any) {
  return (
    <UserContext.Provider value={props.value}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
