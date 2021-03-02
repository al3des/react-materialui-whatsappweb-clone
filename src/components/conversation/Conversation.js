import { makeStyles, Paper } from "@material-ui/core"

let useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "auto",
    backgroundColor: theme.palette.background.default,
  },
}))

export default function Conversation() {
  let classes = useStyles()
  return <Paper className={classes.root}></Paper>
}
