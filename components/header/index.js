import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import SpeedDialButton from '../buttons/SpeedDialButton'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    background: 'rgba(245,245,245,0.7)',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    background: 'rgba(0,0,0,0.8)',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: theme.palette.lightGrey.main,
  },
  actionButton: {},
}))

const ITEM_HEIGHT = 48
const document = {}

function HideOnScroll(props) {
  const { children, window = document ? document?.window : undefined } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function Header(props) {
  const classes = useStyles()
  const { sections, title } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mounted, setMounted] = React.useState(false)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          position='absolute'
          color='transparent'
          style={{ borderBottom: '2px solid rgba(0,0,0,0.3)' }}>
          <Toolbar className={classes.toolbar}>
            <img height={55} width={200} src='/images/logo_header.png' />
          </Toolbar>
          <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
            {sections.map((section) => (
              <Link
                noWrap
                key={section.title}
                variant='body2'
                href={section.url}
                className={classes.toolbarLink}>
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <SpeedDialButton />
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
