import { createContext } from "react"

import useUserSettings from "../hooks/useUserSettings"

export const UserSettingsContext = createContext()

export default function UserSettingsProvider({ children }) {
  let [state, dispatch] = useUserSettings()
  return (
    <UserSettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </UserSettingsContext.Provider>
  )
}
