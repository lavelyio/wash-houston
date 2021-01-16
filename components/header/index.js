import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import SpeedDialButton from '../buttons/SpeedDialButton'
import * as ChildLink from '@material-ui/core/Link'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    background: 'rgba(245,245,245,0.7)',
    borderBottom: '2px solid rgba(0,0,0,0.3)',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    background: 'rgba(0,0,0,0.8)',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: theme.palette.lightGrey.main,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(6),
    },
  },
  actionButton: {},
  headerImg: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
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

  const goHome = () => {
    window.location.href = '/'
  }

  const routeClick = (e) => {
    e.preventDefault()
    const { href } = e.target

    Router.push(href)
  }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position='sticky' color='transparent' style={{ zIndex: 9991 }}>
          <Toolbar className={classes.toolbar}>
            <Link href={'/'}>
              <img
                className={classes.headerImg}
                height={55}
                width={200}
                src='/images/logo_header.png'
              />
            </Link>
          </Toolbar>
          <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
            {sections.map((section) => (
              <Link key={section.title} href={section.url} passHref>
                <ChildLink.default nowrap variant='body2' className={classes.toolbarLink}>
                  {section.title}
                </ChildLink.default>
              </Link>
            ))}
            <Link
              href='https://m.facebook.com/WashHoustonTX/?ref=bookmarks'
              className={classes.icon}
              title='Connect With us'>
              <img
                src='/images/nav-facebook-icon.png'
                height={30}
                alt='Wash Houston, Facebook'
                style={{ marginLeft: 10 }}
              />
            </Link>
            <Link
              title='Find us on Google'
              href='https://g.page/wash-houston?gm'
              className={classes.icon}>
              <img
                src='/images/googlemaps-icon.png'
                height={30}
                alt='Wash Houston, Google'
                style={{ marginLeft: 10 }}
              />
            </Link>
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
