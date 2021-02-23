import { generateNewContact } from "../../../data/contacts"

import { Box, Divider, Grid, IconButton, makeStyles } from "@material-ui/core"
import UpdateIcon from "@material-ui/icons/Update"
import ChatIcon from "@material-ui/icons/Chat"
import Search from "./Search"
import { useContext } from "react"
import { UserSettingsContext } from "../../../context/UserSettingsContext"

import MoreMenu from "../header/menus/more"

let useStyles = makeStyles((theme) => ({
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
  search: {
    background: theme.palette.background.default,
  },
}))

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
            <MoreMenu />
          </Grid>
        </Grid>
        <Grid container className={classes.search}>
          <Search />
        </Grid>
        <Divider />
      </Box>
    </>
  )
}
