import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  Box,
  Slide,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useState } from "react"

let useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 1fr",
    gridTemplateRows: ".3fr 1fr 1fr .3fr",
    gridTemplateAreas: `'.    .     .'
                        'img name time'
                        'img preview preview'
                        '.    .     .'
                        '.   divider divider'
                        `,
    columnGap: "1em",
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
    },
    alignItems: "center",
    padding: "0 .5em",
  },
  avatar: {
    gridArea: "img",
  },
  name: {
    gridArea: "name",
    fontSize: "1rem",
  },
  preview: {
    gridArea: "preview",
    fontSize: ".8rem",
    color: theme.palette.text.disabled,
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  time: {
    gridArea: "time",
    alignSelf: "end",
    justifySelf: "end",
    color: theme.palette.text.disabled,
  },
  icon: {
    gridArea: "preview",
    justifySelf: "end",
    color: theme.palette.text.disabled,
  },
  divider: {
    gridArea: "divider",
    alignSelf: "end",
  },
}))

export default function ContactItem({ contact }) {
  let [hovered, setHovered] = useState(false)
  let classes = useStyles()

  return (
    <>
      <Box
        className={classes.root}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={contact.avatarUrl}
          alt=""
          style={{ width: "100%" }}
          className={classes.avatar}
        />
        <Typography variant="h6" noWrap className={classes.name}>
          {contact.name}
        </Typography>
        <Box className={classes.preview}>
          <Typography noWrap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box
            className={classes.icon}
            style={{ display: hovered ? "inline-block" : "none" }}
          >
            <Slide
              in={hovered}
              direction="left"
              {...(hovered ? { timeout: 100 } : {})}
            >
              <ExpandMoreIcon />
            </Slide>
          </Box>
        </Box>
        <Typography variant="caption" className={classes.time}>
          14:12
        </Typography>

        <Divider light className={classes.divider} />
      </Box>
    </>
  )
}
