import React, { createContext } from "react"
import useContacts from "../hooks/useContacts"

export const ContactsContext = createContext(null)

export default function ContactsContextProvider({ children }) {
  let [contacts, dispatch] = useContacts()

  return (
    <ContactsContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactsContext.Provider>
  )
}
