import { createContext } from 'react'

const UserContext = createContext({})

export default function UserContextProvider(props: any) {
  return (
    <UserContext.Provider value={{}}>
      {props.children}
    </UserContext.Provider>
  )
}
