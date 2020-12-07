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
import { isMobile } from '../../utils'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: '20%',
    paddingRight: '20%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1350,
    width: '100vw',
  },
  gridList: {
    height: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  bannerBg: {
    height: '100vh',
  },
}))

const servicesData = [
  { title: 'Residential', meta: '', cols: 2, src: 'images/residential-service.png' },
  { title: 'Commercial', meta: '', cols: 2, src: 'images/commercial_service.png' },
]

export default function ServicesGridList() {
  const classes = useStyles()

  return (
    <div className='vertical'>
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1300,
          justifyContent: 'center',
          backgroundColor: '#d0d0d2',
        }}>
        <Container
          maxWidth='xl'
          style={{
            padding: '0% 10%',
            zIndex: 1300,
            width: '100vw',
          }}>
          <Typography variant='h3' component='h3'>
            Our Services
          </Typography>
          <GridList className={classes.gridList}>
            {servicesData.map((tile) => (
              <GridListTile
                key={tile.src}
                style={{
                  width: 320,
                  height: 200,
                  marginTop: 10,
                  marginBottom: 5,
                  borderRadius: '6px',
                }}>
                <img src={tile.src} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>{tile.meta}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </div>
    </div>
  )
}
