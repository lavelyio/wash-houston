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
    width: '50vw',
  },
  gridList: {
    paddingTop: 20,
    paddingBottom: 20,
    height: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
  },
  tileBar: {
    height: '30%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  bannerBg: {
    height: '100vh',
  },
}))

const servicesData = [
  { title: 'Residential', meta: '', cols: 2, src: 'images/residential-service.webp' },
  { title: 'Commercial', meta: '', cols: 2, src: 'images/commercial_service.webp' },
]

export default function ServicesGridList() {
  const classes = useStyles()
  const mobile = isMobile()
  return (
    <div className='vertical'>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1300,
          justifyContent: 'center',
          backgroundColor: '#d0d0d2',
          backgroundImage: 'url(images/Tailored-Work.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Container
          maxWidth='xl'
          style={{
            padding: '0% 8%',
            zIndex: 1300,
            width: '100vw',
          }}>
          <Typography variant='h2' gutterBottom>
            A Tailored Approach
          </Typography>
          <GridList className={classes.gridList} cols={2} spacing={10}>
            {servicesData.map((tile) => (
              <GridListTile
                key={tile.src}
                style={{
                  marginTop: 10,
                  marginBottom: 5,
                  borderRadius: '6px',
                  height: '40vh',
                  boxShadow:
                    '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
                }}>
                <img src={tile.src} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>{tile.meta}</span>}
                  className={classes.tileBar}
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
