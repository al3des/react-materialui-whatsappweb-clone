import React from "react"

import {  makeStyles } from "@material-ui/core"

import Header from "../components/sidebar/header/Header"
import ChatList from "../components/sidebar/chat-list/ChatList"
import UserSettings from "../components/sidebar/settings/UserSettings"

let useStyles = makeStyles({
  root: {
    gridRow: "1 / -1",
    display: "grid",
    gridTemplateRows: "minmax(100px, 2fr) 10fr",
  },
  
})

export default function SideBarContainer() {
  let classes = useStyles()

  return (
    <div className={classes.root}>
      <UserSettings />
      <Header />
      <ChatList />
     </div>
  )
}
