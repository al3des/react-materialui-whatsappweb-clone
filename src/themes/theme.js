import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#046162",
      //   light: "rgba(0, 0, 0, 0.54)",
    },
    text: {
      primary: "#D8D9E0",
    },
    background: {
      paper: "#262D31",
      default: "#131C21",
    },
  },
})

theme.overrides = {
  MuiIconButton: {
    root: {
      color: "#D8D9E0",
    },
  },

  MuiInputBase: {
    focused: {
      backgroundColor: `${theme.palette.grey[800]} !important`,
    },
  },

  MuiFilledInput: {
    root: {
      backgroundColor: theme.palette.grey[800],
      "&:hover": {
        backgroundColor: theme.palette.grey[800],
      },
    },
  },
}
