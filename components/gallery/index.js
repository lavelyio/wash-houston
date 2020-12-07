import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Container from '@material-ui/core/Container'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ComparisonSlider from './ComparisonSlider'
import { isMobile } from '../../utils'
import ServicesGridList from '../services/ServicesGridList'
import { ParallaxBanner } from 'react-scroll-parallax'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorderOutlined'
import { Typography } from '@material-ui/core'

// { height: 600, width: isMobile() ? 400 : 650 }
const useStyles = makeStyles((theme) => ({
  bannerBg: {
    minHeight: '100vh',
    marginTop: 50,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
            children: (
              <div
                style={{
                  height: '100vh',
                  marginTop: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 1300,
                  justifyContent: 'center',
                }}>
                <ComparisonSlider />
                <GridList className={classes.gridList} cols={2.5}>
                  {images.map((tile) => (
                    <GridListTile key={tile.img}>
                      <img src={tile.src} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}

export default Gallery
