import { useState } from "react"

export function withMenu(Component) {
  return (props) => {
    let [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <Component
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        {...props}
      />
    )
  }
}
