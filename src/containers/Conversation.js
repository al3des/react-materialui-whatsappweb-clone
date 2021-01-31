import { makeStyles } from "@material-ui/core"

import Header from "../components/conversation/Header"
import Conversation from "../components/conversation/Conversation"
import UserControls from "../components/conversation/UserControls"

let useStyles = makeStyles({
  root: {
    minWidth: "500px",
    gridRow: "1 / -1",
    display: "grid",
    gridTemplateRows: "minmax(50px, 1fr) 5.5fr minmax(30px, .5fr)",
  },
})

export default function ConversationContainer() {
  let classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Conversation />
      <UserControls />
    </div>
  )
}
