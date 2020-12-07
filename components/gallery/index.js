import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Container from '@material-ui/core/Container'
import GridListTile from '@material-ui/core/GridListTile'
import ComparisonSlider from './ComparisonSlider'
import { isMobile } from '../../utils'
import ServicesGridList from '../services/ServicesGridList'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Typography } from '@material-ui/core'

// { height: 600, width: isMobile() ? 400 : 650 }

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridList: {
    height: 450,
  },
  containerBanner: {
    paddingLeft: '15%',
    paddingRight: '15%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1350,
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  gridList: {
    height: '70%',
    display: 'flex',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  bannerBg: {
    minHeight: '100vh',
  },
}))

const images = [
  { title: 'Buisness Lot', cols: 2, src: 'images/gallery/commercial-1.png' },
  { title: 'Residential Sidewalk', cols: 1, src: 'images/gallery/residential-2.png' },
  { title: 'Driveway Deep Clean', cols: 1, src: 'images/gallery/residential-1.png' },
  { title: 'Storefront', cols: 1, src: 'images/gallery/commercial-2.png' },
  { title: 'Extra Large Lot', cols: 1, src: 'images/gallery/commercial-3.png' },
]

const compareImages = [
  { src: 'images/compare/drivethrough-before.png' },
  { src: 'images/compare/drivethrough-after.png' },
]

const Gallery = (props) => {
  const [modalOpen, setModal] = React.useState(false)
  const classes = useStyles()
  const toggleModal = () => setModal(!modalOpen)

  return (
    <div className='vertical'>
      <ParallaxBanner
        className={classes.bannerBg}
        layers={[
          {
            image: '/images/murals/Para-Mi-Gente.png',
            amount: 0.2,
          },
        ]}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1300,
            height: '15vh',
            justifyContent: 'center',
          }}>
          <div className={classes.containerBanner}>
            <Grid item>
              <Typography variant='h3' style={{ zIndex: 1350, color: '#d0d0d2' }}>
                {' '}
                Our Recent Work{' '}
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <GridList cellHeight={180} className={classes.gridList} cols={2}>
                  {images.map((tile) => (
                    <GridListTile key={tile.src} cols={tile.cols || 1}>
                      <img src={tile.src} alt={tile.title} />
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ComparisonSlider />
              </Grid>
            </Grid>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  )
}

export default Gallery
