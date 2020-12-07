import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: '30%',
    paddingRight: '30%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1350,
    width: '100vw',
  },
  gridList: {
    height: '70%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  bannerBg: {
    minHeight: '100vh',
  },
}))

const servicesData = [
  { title: 'Residential', meta: '', cols: 2, src: 'images/residential-service.png' },
  { title: 'Commercial', meta: '', cols: 2, src: 'images/commercial_service.png' },
]

export default function ServicesGridList() {
  const classes = useStyles()

  return (
    <ParallaxProvider>
      <div className='vertical'>
        <ParallaxBanner
          className={classes.bannerBg}
          layers={[
            {
              image: '/images/murals/Houston-Heights-Mural.jpg',
              amount: 0.2,
            },
          ]}>
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1500,
              justifyContent: 'center',
            }}>
            <Typography variant='h3' component='h3'>
              Our Services
            </Typography>
            <Container
              maxWidth='xl'
              style={{
                padding: '5% 15%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 1350,
                width: '100vw',
              }}>
              <GridList cellHeight={300} className={classes.gridList}>
                {servicesData.map((tile) => (
                  <GridListTile key={tile.src}>
                    <img src={tile.src} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>by: {tile?.author}</span>}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${tile.title}`}
                          className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </Container>
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  )
}
