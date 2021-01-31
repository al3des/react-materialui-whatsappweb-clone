import { useContext } from "react"
import { UserSettingsContext } from "../../../context/UserSettingsContext"

import { Button, Drawer, makeStyles } from "@material-ui/core"

let useStyles = makeStyles({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    height: "100vh",
  },
})

export default function UserSettings() {
  let { state, dispatch } = useContext(UserSettingsContext)

  let classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      //   variant="responsive"
      anchor="left"
      open={state.drawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Button onClick={() => dispatch({ type: "DRAWER_TOGGLE" })}>Close</Button>
    </Drawer>
  )
}
