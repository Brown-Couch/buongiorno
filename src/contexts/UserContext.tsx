import { createContext, useContext } from 'react'

interface userInterface {
  appConfig: any
  setAppConfig: any
}

const UserContext = createContext<userInterface>({
  appConfig: {
    jwt: ''
  },
  setAppConfig: () => {}
})

export default function UserContextProvider(props: any) {
  return (
    <UserContext.Provider value={props.value}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
