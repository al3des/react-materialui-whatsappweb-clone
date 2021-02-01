import { Grid, Typography, Divider, makeStyles } from "@material-ui/core"

let useStyles = makeStyles({
  avatar: {
    maxHeight: "60px",
    objectFit: "contain",
  },
})

export default function ContactItem({ contact }) {
  let classes = useStyles()

  return (
    <Grid container alignItems="center">
      <Grid item xs={3}>
        <img
          src={contact.avatarUrl}
          alt=""
          style={{ width: "100%" }}
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={7} container direction="column">
        <Grid item xs={12}>
          <Typography variant="h6" noWrap>
            {contact.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography noWrap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Divider />
      </Grid>
      <Grid item>
        <Typography variant="caption">14:12</Typography>
      </Grid>
    </Grid>
  )
}
