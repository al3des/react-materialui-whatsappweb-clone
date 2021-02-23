import { useContext } from "react"
import { UserSettingsContext } from "../../../context/UserSettingsContext"

import { generateNewContact } from "../../../data/contacts"

import {
  Box,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import EditIcon from "@material-ui/icons/Edit"

let useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    width: "100%",
  },
  drawerPaper: {
    display: "grid",
    gridTemplateRows: "1fr 5fr ",
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
    background: theme.palette.background.default,

    "& img": {
      maxWidth: "80%",
    },
  },
  textFields: {
    "& .Mui-TextField": {
      marginBottom: "2em",
      name: "MuiTextField",
    },
  },
}))

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
        <Container>
          <img src={me.avatarUrl} alt="" />
          <Box className={classes.textFields}>
            <TextField
              label="Your Name"
              // variant="outlined"
              fullWidth
              InputLabelProps={{
                classes: {},
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
              helperText="This is not your username or pin. This name will be visible to your WhatsApp contacts."
            />
            <TextField
              label="About"
              // variant="outlined"
              fullWidth
              InputLabelProps={{
                classes: {},
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>
    </Drawer>
  )
}
