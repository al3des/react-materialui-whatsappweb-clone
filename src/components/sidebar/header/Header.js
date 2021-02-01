import { generateNewContact } from "../../../data/contacts"

import { Box, Grid, IconButton, makeStyles } from "@material-ui/core"
import UpdateIcon from "@material-ui/icons/Update"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Search from "./Search"
import { useContext } from "react"
import { UserSettingsContext } from "../../../context/UserSettingsContext"

let useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },
  profile: {
    cursor: "pointer",
  },
  avatar: {
    maxHeight: "50px",
    objectFit: "contain",
  },
})

export default function Header() {
  let { dispatch } = useContext(UserSettingsContext)

  let me = generateNewContact("me", 0)

  let classes = useStyles()
  return (
    <>
      <Box className={classes.grid}>
        <Grid container alignItems="center" justify="space-between">
          <Grid
            item
            className={classes.profile}
            xs={2}
            onClick={() =>
              dispatch({
                type: "DRAWER_TOGGLE",
              })
            }
          >
            <img src={me.avatarUrl} alt="profile" className={classes.avatar} />
          </Grid>
          <Grid item>
            <IconButton>
              <UpdateIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Search />
        </Grid>
      </Box>
    </>
  )
}
