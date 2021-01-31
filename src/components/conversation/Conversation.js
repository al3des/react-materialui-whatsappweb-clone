import { makeStyles, Paper } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    overflowY: "auto",
  },
})

export default function Conversation() {
  let classes = useStyles()
  return <Paper className={classes.root}></Paper>
}
