import { Grid, Typography, Divider } from "@material-ui/core"

export default function ContactItem({ contact }) {
  return (
    <Grid container alignItems="center">
      <Grid item xs={3}>
        <img src={contact.avatarUrl} alt="" style={{ width: "100%" }} />
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
