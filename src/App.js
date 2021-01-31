import { CssBaseline, makeStyles, Paper } from "@material-ui/core"
import Conversation from "./containers/Conversation"
import SideBar from "./containers/SideBar"
import MessagesProvider from "./context/MessagesContext"
import UserSettingsProvider from "./context/UserSettingsContext"

let useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "pink",
    display: "grid",
    gridTemplateColumns: "minmax(300px, 1fr) 3fr",
    gridTemplateRows: "repeat(3, 1fr)",
  },
})

function App() {
  let classes = useStyles()
  return (
    <MessagesProvider>
      <Paper className={classes.root}>
        <CssBaseline />
        <UserSettingsProvider>
          <SideBar />
        </UserSettingsProvider>
        <Conversation />
      </Paper>
    </MessagesProvider>
  )
}

export default App
