import { useState } from "react"

export function withMenu(Component) {
  return (props) => {
    let [anchorEl, setAnchorEl] = useState(null)
    let [open, setOpen] = useState(false)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
      setOpen((s) => !s)
    }

    const handleClose = () => {
      setAnchorEl(null)
      setOpen((s) => !s)
    }

    return (
      <Component
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        open={open}
        {...props}
      />
    )
  }
}
