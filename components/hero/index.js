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
    marginBottom: theme.spacing(4),
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
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    height: '80%',
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
    ? { backgroundImage: `url(${post.image})`, height: 300 }
    : { backgroundImage: `url(${post.image})`, height: 500 }
  return (
    <Paper className={classes.mainFeaturedPost} style={paperStyles}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid
        container
        justify='space-between'
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 10,
          height: paperStyles.height - 20,
        }}>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph gutterBottom>
              {post.description}
            </Typography>
            <Button size='large' color='secondary' variant='contained'>
              {post.linkText}
            </Button>
          </div>
        </Grid>
        <Grid item md={6} spacing={2}></Grid>
      </Grid>
    </Paper>
  )
}

Hero.propTypes = {
  post: PropTypes.object,
}
