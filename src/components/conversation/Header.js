import React from "react"

import { Grid, IconButton, makeStyles } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import { MessagesContext } from "../../context/MessagesContext"

let useStyles = makeStyles({
  grow: {
    flexGrow: "1",
  },
})

export default function Header() {
  let {
    state: { activeContact },
  } = React.useContext(MessagesContext)

  let classes = useStyles()

  return (
    <>
      {activeContact && (
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <img src={activeContact.avatarUrl} alt="" />
          </Grid>
          <Grid item className={classes.grow}>
            {activeContact.name}
          </Grid>
          <Grid item>
            <IconButton>
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
