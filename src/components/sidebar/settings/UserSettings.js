import { useContext } from "react"
import { UserSettingsContext } from "../../../context/UserSettingsContext"

import { generateNewContact } from "../../../data/contacts"

import {
  Box,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import EditIcon from "@material-ui/icons/Edit"
import AccountCircle from "@material-ui/icons/AccountCircle"

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
  label: {
    ".MuiInputLabel-filled": {
      color: "red",
    },
    "&.Mui-focused": {
      // position: "relative",
      // background: "rgba(0,0,0,0)",
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
        <img src={me.avatarUrl} alt="" />
        <Box>
          <FormControl>
            <InputLabel
              htmlFor="name"
              classes={{ filled: classes.label }}
              variant="filled"
            >
              Your Name
            </InputLabel>
            <Input
              id="name"
              endAdornment={
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            label="Your Name"
            variant="standard"
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
          {/* <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            </FormControl>*/}
        </Box>
      </Box>
    </Drawer>
  )
}
