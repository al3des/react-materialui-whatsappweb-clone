import { useContext, useState } from "react"
import { ContactsContext } from "../../../context/ContactsContext"

import { InputAdornment, makeStyles } from "@material-ui/core"

import SearchIcon from "@material-ui/icons/Search"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import InputRounded from "../../utils/input-rounded"

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
  let { dispatch } = useContext(ContactsContext)

  let [focused, setFocused] = useState(false)

  let classes = useStyles()

  let handleSearch = ({ target }) => {
    dispatch({ type: "SEARCH", value: target.value })
  }

  return (
    <>
      <InputRounded
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleSearch}
        fullWidth
        variant="filled"
        InputProps={{
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
        }}
      />
    </>
  )
}
