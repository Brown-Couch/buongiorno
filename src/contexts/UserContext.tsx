import { createContext, useContext } from 'react'

const UserContext = createContext({})

export default function UserContextProvider(props: any) {
  return (
    <UserContext.Provider value={{}}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
