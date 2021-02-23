import React from "react"
import contacts from "../../../data/contacts"

import { MessagesContext } from "../../../context/MessagesContext"

import { Grid, makeStyles } from "@material-ui/core"
import ContactItem from "./ContactItem"

let useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "auto",
    overflowX: "hidden",
    background: theme.palette.background.default,
  },
  contactItem: {
    cursor: "pointer",
  },
}))

export default function ChatList() {
  let { dispatch } = React.useContext(MessagesContext)
  let classes = useStyles()
  return (
    <Grid container justify="space-between" className={classes.root}>
      {contacts.map((contact) => (
        <Grid
          key={contact.id}
          item
          xs={12}
          className={classes.contactItem}
          onClick={() => dispatch({ type: "SELECT_CONTACT", contact })}
        >
          <ContactItem contact={contact} />
        </Grid>
      ))}
    </Grid>
  )
}
