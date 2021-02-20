import {
  CssBaseline,
  makeStyles,
  Paper,
  ThemeProvider,
} from "@material-ui/core"
import Conversation from "./containers/Conversation"
import SideBar from "./containers/SideBar"
import ConversationSettingsProvider from "./context/ConversationSettingsContext"
import MessagesProvider from "./context/MessagesContext"
import UserSettingsProvider from "./context/UserSettingsContext"

import { theme } from "./themes/theme"

let useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "minmax(450px, 1fr) 3fr",
    gridTemplateRows: "repeat(3, 1fr)",
  },
}))

function App() {
  let classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <MessagesProvider>
        <Paper className={classes.root}>
          <CssBaseline />
          <UserSettingsProvider>
            <SideBar />
          </UserSettingsProvider>
          <ConversationSettingsProvider>
            <Conversation />
          </ConversationSettingsProvider>
        </Paper>
      </MessagesProvider>
    </ThemeProvider>
  )
}

export default App
