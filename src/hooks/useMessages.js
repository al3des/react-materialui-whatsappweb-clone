import { useReducer } from "react"

import randomWords from "random-words"

export default function useMessages() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "WRITE_MSG":
          return {
            ...state,
            messages: [
              ...state.messages,
              {
                body: action.message,
                sender: "me",
                contactId: state.activeContact.id,
              },
              {
                body: randomWords({ min: 3, max: 10, join: " " }),
                sender: state.activeContact.id,
                contactId: state.activeContact.id,
              },
            ],
          }
        case "SELECT_CONTACT":
          return { ...state, activeContact: action.contact }
        default:
          return state
      }
    },
    { messages: [] }
  )
  return [state, dispatch]
}
