import { useState } from "react"

import { InputAdornment, makeStyles, TextField } from "@material-ui/core"

import SearchIcon from "@material-ui/icons/Search"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

let useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    margin: "auto 1em",
  },
  inputRoot: {
    borderRadius: "2em",
  },
  input: {
    padding: ".5em 1em",
    display: "flex",
  },
  InputAdornment: {
    marginTop: "0!important",
    transform: "unset",
    transformOrigin: "center center",
    transition: "transform .3s",
  },
  InputAdornmentTransition: {
    marginTop: "0!important",
    transform: "rotate(360deg)",
    transformOrigin: "center center",
    transition: "transform .3s",
  },
}))

export default function Search() {
  let [focused, setFocused] = useState(false)
  let classes = useStyles()

  return (
    <>
      <TextField
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        fullWidth
        variant="filled"
        className={classes.root}
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.input,
          },
          startAdornment: (
            <InputAdornment
              position="start"
              classes={{
                root: focused
                  ? classes.InputAdornmentTransition
                  : classes.InputAdornment,
              }}
            >
              {focused ? <ArrowBackIcon /> : <SearchIcon />}
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </>
  )
}
