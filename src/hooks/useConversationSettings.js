import { useReducer } from "react"

export default function useConversationSettings() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCH_CONVERSATION":
        return {
          ...state,
          drawerOpen: true,
        }

      default:
        return state
    }
  }, {})

  return [state, dispatch]
}
