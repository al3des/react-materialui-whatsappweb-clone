import { generateNewContact } from "../../../data/contacts"

import { Box, Grid, IconButton, makeStyles } from "@material-ui/core"
import UpdateIcon from "@material-ui/icons/Update"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"

let useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },
})

export default function Header() {
  let me = generateNewContact("me", 0)

  let classes = useStyles()
  return (
    <Box className={classes.grid}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={3}>
          <img src={me.avatarUrl} alt="profile" />
        </Grid>
        <Grid item>
          <IconButton>
            <UpdateIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container>search</Grid>
    </Box>
  )
}
