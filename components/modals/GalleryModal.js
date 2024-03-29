import React, { useState } from 'react'
import Lightbox from 'react-spring-lightbox'
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import { Grid, Toolbar, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

const ModalHeader = ({ title, onClose, gotoNext, gotoPrevious }) => (
  <AppBar variant='elevation' style={{ background: 'rgba(245,245,245,0.8)' }}>
    <Toolbar
      variant='dense'
      style={{ display: 'flex', alignItems: 'Center', justifyContent: 'space-between' }}>
      <Grid justify='space-between'>
        <IconButton aria-label='close' size='medium'>
          <CloseOutlinedIcon onClick={onClose} />
        </IconButton>
        <IconButton aria-label='previous'>
          <ChevronLeftOutlinedIcon onClick={gotoPrevious} style={{ cursor: 'pointer' }} />
        </IconButton>
        <IconButton aria-label='next'>
          <ChevronRightOutlinedIcon onClick={gotoNext} style={{ cursor: 'pointer' }} />
        </IconButton>
      </Grid>
      <Grid justify='flex-end'>
        <Typography variant='caption' align='right' color='primary'>
          {title}
        </Typography>
      </Grid>
    </Toolbar>
  </AppBar>
)

const GalleryModal = ({ images, imageIndex, onClose }) => {
  const [currentImageIndex, setCurrentIndex] = useState(imageIndex)
  const gotoPrevious = () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)
  const gotoNext = () =>
    currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1)

  return (
    <Lightbox
      isOpen
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      singleClickToZoom
      style={{ zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.8)' }}
      /* Add your own UI */
      renderHeader={() => (
        <ModalHeader
          title={images[currentImageIndex].title}
          onClose={onClose}
          gotoNext={gotoNext}
          gotoPrevious={gotoPrevious}
        />
      )}
      renderFooter={() => (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Typography
            variant='caption'
            style={{
              flexGrow: 1,
              textAlign: 'center',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
            }}>
            {images[currentImageIndex].title}
          </Typography>
        </div>
      )}
      renderPrevButton={() => <ChevronLeftOutlinedIcon />}
      renderNextButton={() => <ChevronRightOutlinedIcon />}
      // renderImageOverlay={() => (<ImageOverlayComponent >)}
      /* Add styling */
      // className="cool-class"
      // style={{ background: "grey" }}
      /* Handle closing */
      onClose={onClose}
      /* Use single or double click to zoom */
      // singleClickToZoom
      /* react-spring config for open/close animation */
      pageTransitionConfig={{
        from: { transform: 'scale(0.75)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 },
        leave: { transform: 'scale(0.75)', opacity: 0 },
        config: { mass: 1, tension: 480, friction: 32 },
      }}
    />
  )
}
export default GalleryModal
