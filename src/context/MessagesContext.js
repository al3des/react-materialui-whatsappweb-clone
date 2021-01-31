import React, { createContext } from "react"

import useMessages from "../hooks/useMessages"

export const MessagesContext = createContext()

export default function MessagesProvider({ children }) {
  let [state, dispatch] = useMessages()
  return (
    <MessagesContext.Provider value={{ state, dispatch }}>
      {children}
    </MessagesContext.Provider>
  )
}
