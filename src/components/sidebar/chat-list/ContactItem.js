import { Grid, Typography, Divider, makeStyles } from "@material-ui/core"

let useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
    },
    padding: ".5em 0",
    position: "relative",
  },
  active: {
    backgroundColor: theme.palette.grey[800],
  },

  avatar: {
    maxHeight: "60px",
    objectFit: "contain",
  },
  msgText: {
    color: theme.palette.text.secondary,
  },
  date: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "1em",
  },
}))

export default function ContactItem({ contact }) {
  let classes = useStyles()

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item xs={2}>
          <img
            src={contact.avatarUrl}
            alt=""
            style={{ width: "100%" }}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={8} container direction="column">
          <Grid item xs={12}>
            <Typography variant="h6" noWrap>
              {contact.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography noWrap className={classes.msgText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} className={classes.date}>
          <Typography variant="caption">14:12</Typography>
        </Grid>
      </Grid>
      <Divider light variant="inset" />
    </>
  )
}
