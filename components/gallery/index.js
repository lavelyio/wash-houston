import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion'
import Router from 'next/router'
import GridList from '@material-ui/core/GridList'
import Container from '@material-ui/core/Container'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { isMobile } from '../../utils'
import { Button, Typography } from '@material-ui/core'
import GalleryModal from '../modals/GalleryModal'

const mobile = isMobile()

// { height: 600, width: isMobile() ? 400 : 650 }
const useStyles = makeStyles((theme) => ({
  bannerBg: {
    minHeight: '100vh',
    marginTop: 50,
  },
  root: {
    minHeight: 350,
  },
  gridTitle: {
    textShadow: '2px 2px #f8f8f8',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridItem: mobile
    ? {
        height: 250,
        width: 200,
      }
    : {
        height: 400,
        width: 600,
      },
  ...{ cursor: 'pointer' },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}))

const images = [
  { title: 'Buisness Lot', cols: 2, src: '/images/gallery/commercial-1.webp' },
  { title: 'Residential Sidewalk', cols: 1, src: '/images/gallery/residential-2.webp' },
  { title: 'Driveway Deep Clean', cols: 1, src: '/images/gallery/residential-1.webp' },
  { title: 'Storefront', cols: 1, src: '/images/gallery/commercial-2.webp' },
  { title: 'Extra Large Lot', cols: 1, src: '/images/gallery/commercial-3.webp' },
]

const compareImages = [
  { src: 'images/compare/drivethrough-before.webp' },
  { src: 'images/compare/drivethrough-after.webp' },
]

const Gallery = (props) => {
  const [modalOpen, setModal] = React.useState(false)
  const [imageIndex, setImageIndex] = React.useState(0)
  const classes = useStyles()
  const toggleModal = () => setModal(!modalOpen)

  const seeMoreClick = () => {
    Router.push('/gallery')
  }

  const handleImageClick = (index) => {
    setImageIndex(index)
    toggleModal()
  }

  return (
    <div className={classes.root}>
      {modalOpen && <GalleryModal onClose={toggleModal} images={images} imageIndex={imageIndex} />}
      <Container disableGutters>
        <Typography
          variant='h3'
          className={classes.gridTitle}
          color='primary'
          style={{ marginTop: 40, marginBottom: 40 }}>
          Our Recent Work
        </Typography>
        <GridList className={classes.gridList} cols={2.5}>
          {images.map((tile, i) => (
            <GridListTile key={tile.img} name={tile.src}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.6 },
                }}>
                <img
                  onClick={(e) => handleImageClick(i)}
                  className={classes.gridItem}
                  src={tile.src}
                  alt={tile.title}
                />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </motion.div>
            </GridListTile>
          ))}
        </GridList>

        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={seeMoreClick}
          style={{ marginTop: 40, marginBottom: 60, minWidth: 180 }}>
          See More
        </Button>
      </Container>
    </div>
  )
}

export default Gallery
