import { useReducer } from "react"
import contacts from "../data/contacts"

export default function useContacts() {
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCH": {
        return contacts.filter((c) =>
          c.name.toLowerCase().includes(action.value.toLowerCase())
        )
      }

      default:
        return state
    }
  }, contacts)

  return [state, dispatch]
}
