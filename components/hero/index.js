import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { isMobile } from '../../utils'
import Link from '@material-ui/core/Link'

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
    top: 0,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

export default function Hero(props) {
  const classes = useStyles()
  const { post } = props
  const paperStyles = isMobile()
    ? { backgroundImage: `url(${post.image})`, height: '102vh' }
    : { backgroundImage: `url(${post.image})`, height: '102vh' }
  return (
    <div className={classes.mainFeaturedPost} style={paperStyles}>
      <Grid
        container
        style={{
          padding: 10,
          height: paperStyles.height - 20,
        }}>
        <div className={classes.mainFeaturedPostContent}>
          <Typography component='h1' variant='h3' color='inherit' gutterBottom>
            {post.title}
          </Typography>
          <Typography variant='p' color='inherit' paragraph gutterBottom>
            {post.description}
          </Typography>
          <Button
            size='large'
            color='secondary'
            variant='contained'
            style={{ width: '150px', position: 'absolute', bottom: '4rem' }}>
            {post.linkText}
          </Button>
        </div>
      </Grid>
      <div className='scroll-down' />
    </div>
  )
}

Hero.propTypes = {
  post: PropTypes.object,
}
