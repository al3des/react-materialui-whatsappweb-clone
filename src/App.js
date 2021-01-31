import { CssBaseline, makeStyles, Paper } from "@material-ui/core"
import Conversation from "./containers/Conversation"
import SideBar from "./containers/SideBar"

let useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "pink",
    display: "grid",
    gridTemplateColumns: "minmax(250px, 1fr) 3fr",
    gridTemplateRows: "repeat(3, 1fr)",
  },
})

function App() {
  let classes = useStyles()
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <SideBar />
      <Conversation />
    </Paper>
  )
}

export default App
