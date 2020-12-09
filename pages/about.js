import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AboutUsTimeline from '../components/about/AboutUsTimeline'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

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
    position: 'absolute',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    textShadow: '1px 1px black',
  },
  sectionCard: {
    height: 225,
  },
}))

const about = {
  headerText: 'Who We Are',
  headerDescription: `
    Maintaining the exterior of your business just got easier. 
    Our technicians will deep clean your walkways, parking lots, heavy equipment and much more so you can focus on growing your company.`,
  headerImg: '/images/houston_about.jpg',
  body: {
    leadText: 'Meet the Team',
    sections: [
      {
        title: 'Heavy Equipment',
        img: '',
        description: '',
      },
      {
        title: 'Lots',
        img: '',
        description: '',
      },
      {
        title: 'Buildings',
        img: '',
        description: '',
      },
      {
        title: 'Walkways',
        img: '',
        description: '',
      },
    ],
  },
}

const About = (props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Wash Houston - Who We Are</title>
      </Head>
      <Container style={{ backgroundColor: '#f8f8f8', height: '100%', paddingBottom: 30 }}>
        <Container maxWidth='lg' style={{ marginBottom: 30 }}>
          <Paper elevation={4} style={{ padding: 20 }}>
            <img
              src={about.headerImg}
              width='100%'
              height={500}
              style={{ marginBottom: 20, borderRadius: 4 }}
            />
            <Box maxWidth='lg' mt={6} style={{ padding: 10 }}>
              <Typography variant='h2' gutterBottom component='h2' color='primary'>
                {about.headerText}
              </Typography>
              <Typography variant='body1' style={{ width: '75%' }}>
                {about.headerDescription}
              </Typography>
            </Box>
            <Typography
              variant='h4'
              component='h4'
              color='secondary'
              style={{ marginTop: 20, padding: 10 }}>
              {about.body.leadText}
            </Typography>
            <Grid container spacing={6}>
              <AboutUsTimeline />
            </Grid>
          </Paper>
        </Container>
      </Container>
    </>
  )
}

export default About
