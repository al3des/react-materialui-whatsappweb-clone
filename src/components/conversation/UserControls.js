import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core"
import MicIcon from "@material-ui/icons/Mic"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import InputRounded from "../utils/input-rounded"

let useStyles = makeStyles({
  grow: {
    flexGrow: "1",
  },
})

export default function UserControls() {
  let classes = useStyles()
  return (
    <Paper>
      <Grid container alignItems="center">
        <Grid item>
          <IconButton>
            <EmojiEmotionsIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.grow}>
          <InputRounded fullWidth variant="filled" />
        </Grid>
        <Grid item>
          <IconButton>
            <MicIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}
