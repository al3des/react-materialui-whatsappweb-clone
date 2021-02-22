import { useContext } from "react"
import { UserSettingsContext } from "../../../context/UserSettingsContext"

import { generateNewContact } from "../../../data/contacts"

import {
  Box,
  Drawer,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"

let useStyles = makeStyles({
  drawer: {
    flexShrink: 0,
    width: "100%",
  },
  drawerPaper: {
    height: "100vh",
    position: "relative",
  },
  header: {
    paddingTop: "4em",
    paddingLeft: "1em",
    gap: "2em",
    display: "flex",
    alignItems: "center",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& img": {
      maxWidth: "80%",
    },
  },
})

export default function UserSettings(props) {
  let { state, dispatch } = useContext(UserSettingsContext)
  let me = generateNewContact("me", 0)
  console.log(me)
  let classes = useStyles()
  console.log(props)
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={state.drawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.header}>
        <IconButton onClick={() => dispatch({ type: "DRAWER_TOGGLE" })}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">Profile</Typography>
      </Box>
      <Box className={classes.userInfo}>
        <img src={me.avatarUrl} alt="" />
        <Box>
          <TextField label="Your Name" InputLabelProps={{ color: "primary" }} />
        </Box>
      </Box>
    </Drawer>
  )
}
