import { useReducer } from "react"

export default function useUserSettings() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "DRAWER_TOGGLE":
          return {
            ...state,
            drawerOpen: !state.drawerOpen,
          }

        default:
          return { state }
      }
    },
    {
      state: {
        drawerOpen: false,
        settings: {},
      },
    }
  )
  return [state, dispatch]
}
