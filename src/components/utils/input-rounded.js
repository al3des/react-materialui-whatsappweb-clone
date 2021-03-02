import { makeStyles, TextField } from "@material-ui/core"

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
}))

export default function InputRounded({ ...restProps }) {
  let classes = useStyles()
  return (
    <TextField
      {...restProps}
      className={classes.root}
      InputProps={{
        ...restProps.InputProps,
        classes: {
          root: classes.inputRoot,
          input: classes.input,
          focused: classes.focused,
        },
        disableUnderline: true,
      }}
      focused
    />
  )
}
