import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import MailIcon from '@material-ui/icons/MailOutlineOutlined'
import CallOutlineIcon from '@material-ui/icons/CallOutlined'
import PrintIcon from '@material-ui/icons/Print'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteIcon from '@material-ui/icons/Favorite'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const actions = [
  { icon: <MailIcon />, name: 'Send us a Message' },
  { icon: <CallOutlineIcon />, name: 'Call Us' },
  { icon: <ShareIcon />, name: 'Share' },
]

export default function SpeedDialButton() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel='SpeedDial openIcon example'
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        direction='down'
        open={open}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </>
  )
}
