import { createContext, useContext } from 'react'

interface appConfigInterface {
  data: any
  setData: any
}

const AppConfigContext = createContext<appConfigInterface>({
  data: {
    jwt: '',
  },
  setData: () => {},
})

export default function AppConfigContextProvider(props: any) {
  return (
    <AppConfigContext.Provider value={props.value}>
      {props.children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfigContext = () => useContext(AppConfigContext)
