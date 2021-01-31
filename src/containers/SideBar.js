import { makeStyles } from "@material-ui/core"

import Header from "../components/sidebar/header/Header"
import ChatList from "../components/sidebar/chat-list/ChatList"

let useStyles = makeStyles({
  root: {
    gridRow: "1 / -1",
    display: "grid",
    gridTemplateRows: "minmax(50px, 2fr) 10fr",
  },
})

export default function SideBarContainer() {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
    </div>
  )
}
