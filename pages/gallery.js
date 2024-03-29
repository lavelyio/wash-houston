import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: 450,
  },
}))

const gallery = {
  headerText: 'Our Work',
  headerDescription: `
    Maintaining Houston is what we do best. We strive to leave our community with a sense of pride in their work and allow them to focus on their lives.`,
  headerImg: '/images/houston_gallery.jpg',
  body: {
    leadText: 'Some of our work',
    gallery: [
      {
        title: 'Heavy Equipment',
        img: '/images/heavy_equipment.webp',
        cols: 2,
        description: '',
      },
      {
        title: 'Lots',
        img: '/images/parking_lot.webp',
        cols: 1,
        description: '',
      },
      {
        title: 'Buildings',
        img: '/images/buildings.webp',
        cols: 1,
        description: '',
      },
      {
        title: 'Walkways',
        img: '/images/walkways.webp',
        cols: 1,
        description: '',
      },
    ],
  },
}

function ImageGridList({ images }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {images.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1} style={{ borderRadius: 6 }}>
            <img src={tile.img} alt={tile.title} style={{ perspective: 1200, borderRadius: 6 }} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const Gallery = (props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Wash Houston - gallery Services</title>
      </Head>
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
            variant='h3'
            component='h3'
            color='secondary'
            style={{ marginTop: 20, padding: 10 }}>
            {gallery.body.leadText}
          </Typography>
          <ImageGridList images={gallery.body.gallery} />
        </Grid>
      </Container>
    </>
  )
}

export default Gallery
