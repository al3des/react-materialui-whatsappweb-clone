import React, { useContext } from "react"
import { MessagesContext } from "../context/MessagesContext"

import { makeStyles } from "@material-ui/core"

import Header from "../components/conversation/Header"
import Conversation from "../components/conversation/Conversation"
import UserControls from "../components/conversation/UserControls"
import NoContactSelected from "../components/conversation/NoContactSelected"

let useStyles = makeStyles({
  root: {
    minWidth: "500px",
    gridRow: "1 / -1",
    display: "grid",
    gridTemplateRows: "minmax(50px, 1fr) 10fr minmax(30px, 1fr)",
  },
  noContact: {
    margin: "auto",
  },
})

export default function ConversationContainer() {
  let {
    state: { activeContact },
  } = useContext(MessagesContext)

  let classes = useStyles()
  console.log(activeContact)
  return (
    <>
      {activeContact ? (
        <div className={classes.root}>
          <Header />
          <Conversation />
          <UserControls />
        </div>
      ) : (
        <div className={classes.noContact}>
          <NoContactSelected />
        </div>
      )}
    </>
  )
}
