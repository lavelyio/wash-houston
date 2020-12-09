import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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

const gallery = {
  headerText: 'Our Work',
  headerDescription: `
    Maintaining Houston is what we do best. We strive to leave our community with a sense of pride in their work and allow them to focus on their lives.`,
  headerImg: '/images/houston_gallery.jpg',
  body: {
    leadText: 'Recent Work',
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

const Gallery = (props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Wash Houston - gallery Services</title>
      </Head>
      <img
        src={gallery.headerImg}
        width='100%'
        height={500}
        style={{ marginBottom: 20, borderRadius: 4 }}
      />
      <Container style={{ backgroundColor: '#f8f8f8', height: '100%', paddingBottom: 30 }}>
        <Grid>
          <Box maxWidth='lg' mt={6} style={{ padding: 10 }}>
            <Typography variant='h2' gutterBottom component='h2' color='primary'>
              {gallery.headerText}
            </Typography>
            <Typography variant='body1' style={{ width: '75%' }}>
              {gallery.headerDescription}
            </Typography>
          </Box>
          <Typography
            variant='h4'
            component='h4'
            color='secondary'
            style={{ marginTop: 20, padding: 10 }}>
            {gallery.body.leadText}
          </Typography>
          <Grid container spacing={6}>
            {gallery?.body.sections &&
              gallery.body.sections.map((section, key) => {
                return (
                  <Grid item xs={12} sm={6} key={key}>
                    <Card className={classes.sectionCard}>
                      <CardActionArea>
                        <CardMedia style={{ height: 100 }} image='' title='Contemplative Reptile' />
                        <CardContent>
                          <Typography gutterBottom variant='h5' component='h2'>
                            {section.title}
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>
                            {section.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size='large' color='primary'>
                          Get Started
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Gallery
