import React from "react"

import { MessagesContext } from "../../../context/MessagesContext"
import { ContactsContext } from "../../../context/ContactsContext"

import { Box, makeStyles } from "@material-ui/core"
import ContactItem from "./ContactItem"

let useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "auto",
    overflowX: "hidden",
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
  },
  contactItem: {
    cursor: "pointer",
  },
}))

export default function ChatList() {
  let { dispatch } = React.useContext(MessagesContext)
  let { contacts } = React.useContext(ContactsContext)
  let classes = useStyles()
  console.log(contacts)
  return (
    <Box className={classes.root}>
      {contacts.map((contact) => (
        <Box
          key={contact.id}
          item
          xs={12}
          className={classes.contactItem}
          onClick={() => dispatch({ type: "SELECT_CONTACT", contact })}
        >
          <ContactItem contact={contact} />
        </Box>
      ))}
    </Box>
  )
}
