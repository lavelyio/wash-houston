import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { isMobile } from '../../utils'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    height: '105vh',
    width: '100vw',
    marginTop: '-115px', // Header is 114px rendered
    paddingBottom: '115px',
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
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    textShadow: '1px 1px black',
  },
}))

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
      delay: 0.1,
    },
  },
}

const listItem = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, y: 30 },
}
const title = {
  hidden: { opacity: 0 },
  show: { opacity: 1, x: 100 },
}

export default function Hero(props) {
  const classes = useStyles()
  const [showScrollBtn, setScrollBtn] = React.useState(true)
  const { post, scrollDown } = props
  const mobile = isMobile()
  const paperStyles = mobile
    ? { backgroundImage: `url(${post.image})` }
    : { backgroundImage: `url(${post.image})` }

  return (
    <div id='Hero' className={classes.mainFeaturedPost} style={paperStyles}>
      <div className={classes.mainFeaturedPostContent}>
        <motion.div variants={container} initial='hidden' animate='show'>
          <motion.div
            key={1}
            variants={title}
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.4 }}>
            <Typography variant='h1' gutterBottom style={{ marginTop: '20%' }}>
              {post.title}
            </Typography>
          </motion.div>
          <motion.div key={2} variants={listItem} transition={{ ease: 'easeOut', duration: 0.6 }}>
            <Typography
              variant='h5'
              style={{
                maxWidth: 450,
                overflowWrap: 'break-word',
              }}
              color='inherit'
              className='hero-callout'
              paragraph
              gutterBottom>
              {post.description}
            </Typography>
          </motion.div>
          <motion.div key={3} variants={listItem} transition={{ ease: 'easeOut', duration: 0.6 }}>
            <Button
              size='large'
              color='secondary'
              variant='contained'
              style={{ maxWidth: '30em', marginTop: 20 }}>
              {post.linkText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {showScrollBtn && <div className='scroll-down' onClick={scrollDown} />}
    </div>
  )
}

Hero.propTypes = {
  post: PropTypes.object,
}
