import React from "react"

import { Grid, IconButton, makeStyles } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import { MessagesContext } from "../../context/MessagesContext"
import { ConversationSettingsContext } from "../../context/ConversationSettingsContext"

let useStyles = makeStyles({
  avatar: {
    maxWidth: "100%",
    maxHeight: "50px",
    objectFit: "contain",
  },
  grow: {
    flexGrow: "1",
  },
})

export default function Header() {
  let {
    state: { activeContact },
  } = React.useContext(MessagesContext)

  let {
    state: { drawerOpen },
    dispatch,
  } = React.useContext(ConversationSettingsContext)
  console.log(drawerOpen)
  let classes = useStyles()

  return (
    <>
      {activeContact && (
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <img
              src={activeContact.avatarUrl}
              alt=""
              className={classes.avatar}
            />
          </Grid>
          <Grid item className={classes.grow}>
            {activeContact.name}
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => dispatch({ type: "SEARCH_CONVERSATION" })}
            >
              <SearchIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </>
  )
}
