import { createContext, useContext } from 'react'

export interface AppConfig {
  data: any
  setData: any
}

const AppConfigContext = createContext<AppConfig>({
  data: {
    jwt: '',
    userName: '',
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
