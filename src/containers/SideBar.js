import React from "react"

import { makeStyles } from "@material-ui/core"

import Header from "../components/sidebar/header/Header"
import ChatList from "../components/sidebar/chat-list/ChatList"
import UserSettings from "../components/sidebar/settings/UserSettings"

let useStyles = makeStyles((theme) => ({
  root: {
    gridRow: "1 / -1",
    display: "grid",
    gridTemplateRows: "0 minmax(100px, 2fr) 10fr ",
    borderRight: `1px solid ${theme.palette.grey[800]}`,
  },
}))

export default function SideBarContainer() {
  let classes = useStyles()

  const rootRef = React.useRef(null)

  return (
    <>
      <div className={classes.root} ref={rootRef}>
        <UserSettings />
        <Header />
        <ChatList />
      </div>
    </>
  )
}
