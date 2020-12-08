import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { isMobile } from '../../utils'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: '#d0d0d2',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  mainFeaturedPostContent: {
    position: 'absolute',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    textShadow: '1px 1px black',
  },
}))

export default function Hero(props) {
  const classes = useStyles()
  const { post } = props
  const mobile = isMobile()
  const paperStyles = mobile
    ? { backgroundImage: `url(${post.image})`, height: '100vh' }
    : { backgroundImage: `url(${post.image})`, height: '100vh' }
  return (
    <div className={classes.mainFeaturedPost} style={paperStyles}>
      <Grid container>
        <Grid item className={classes.mainFeaturedPostContent}>
          <Typography variant='h1' style={{ marginTop: 30 }} gutterBottom>
            {post.title}
          </Typography>
          <Typography
            variant='h5'
            style={{
              width: '70%',
              overflowWrap: 'break-word',
            }}
            color='inherit'
            className='hero-callout'
            paragraph
            gutterBottom>
            {post.description}
          </Typography>

          <Button
            size='large'
            color='secondary'
            variant='contained'
            style={{
              width: '40vw',
              position: 'absolute',
              bottom: '3rem',
            }}>
            {post.linkText}
          </Button>
        </Grid>
      </Grid>
      <div className='scroll-down' />
    </div>
  )
}

Hero.propTypes = {
  post: PropTypes.object,
}
