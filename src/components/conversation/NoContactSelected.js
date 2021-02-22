import { Box, makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    borderBottom: `5px solid ${theme.palette.primary.main}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    maxWidth: "50%",
    margin: "auto",
    textAlign: "center",
  },
  title: {
    marginBottom: ".5em",
  },
  img: {
    maxWidth: "60%",
    borderRadius: "50%",
    objectFit: "cover",
  },
}))

export default function NoContactSelected() {
  let classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <div>
          <img
            src="https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg"
            alt=""
            className={classes.img}
          />
        </div>
        <Typography variant="h4" className={classes.title}>
          Keep your phone conected
        </Typography>
        <Typography>
          WhatsApp connects to your phone to sync messages. To reduce data
          usage, connect your phone to Wi-Fi
        </Typography>
      </Box>
    </Box>
  )
}
