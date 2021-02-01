import React, { createContext } from "react"

import useConversationSettings from "../hooks/useConversationSettings"

export const ConversationSettingsContext = createContext()

export default function ConversationSettingsProvider({ children }) {
  let [state, dispatch] = useConversationSettings()

  return (
    <ConversationSettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </ConversationSettingsContext.Provider>
  )
}
