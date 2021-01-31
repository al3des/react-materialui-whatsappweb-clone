import { makeStyles } from "@material-ui/core"

import Header from "../components/sidebar/Header"
import ChatList from "../components/sidebar/ChatList"

let useStyles = makeStyles({
  root: {
    gridRow: "1 / -1",
    display: "grid",
    gridTemplateRows: "minmax(50px, 1fr) 6fr",
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
