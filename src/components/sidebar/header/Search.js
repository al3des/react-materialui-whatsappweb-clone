import { InputAdornment, makeStyles, TextField } from "@material-ui/core"

import SearchIcon from "@material-ui/icons/Search"

let useStyles = makeStyles({
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
  },
})

export default function Search() {
  let classes = useStyles()
  return (
    <>
      <TextField
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
              classes={{ root: classes.InputAdornment }}
            >
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </>
  )
}
