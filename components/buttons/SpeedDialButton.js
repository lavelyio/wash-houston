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
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import FavoriteIcon from '@material-ui/icons/Favorite'
import EditIcon from '@material-ui/icons/Edit'
import { Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'fixed',
    top: theme.spacing(2),
    right: '10vw',
    zIndex: 9992,
  },
}))

const actions = [
  { icon: <MailIcon />, name: 'Send us a Message', link: 'mailto:contact@houstonwash.com' },
  { icon: <CallOutlineIcon />, name: 'Call Us', link: 'tel:+1-936-346-5322' },
  { icon: <ShareIcon />, name: 'Share with friends' },
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
        ariaLabel='SpeedDial for Houston Wash'
        className={classes.speedDial}
        color='secondary'
        hidden={hidden}
        icon={<ContactSupportIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        direction='down'
        open={open}>
        {actions.map((action) => {
          if (action?.link) {
            return (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={(e) => {
                  window.location.href = action.link
                }}></SpeedDialAction>
            )
          }
          return (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          )
        })}
      </SpeedDial>
    </>
  )
}
