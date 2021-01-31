import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core"
import MicIcon from "@material-ui/icons/Mic"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"

let useStyles = makeStyles({
  grow: {
    flexGrow: "1",
  },
})

export default function UserControls() {
  let classes = useStyles()
  return (
    <Paper>
      <Grid container>
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
          <TextField fullWidth />
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
