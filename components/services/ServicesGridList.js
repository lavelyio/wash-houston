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
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1300,
    justifyContent: 'center',
    backgroundColor: '#d0d0d2',
    backgroundImage: 'url(images/Tailored-Work.webp)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
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
  gridTitle: {
    color: '#fff',
    textShadow: '1px 1px black',
    [theme.breakpoints.up('sm')]: {
      fontSize: '6vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '9vw',
    },
  },
  gridTile: {
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 5,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      minWidth: 320,
      minHeight: 275,
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 500,
      minHeight: '40vh',
    },
  },
  tileImg: {
    borderRadius: '6px',
    [theme.breakpoints.down('sm')]: {
      minWidth: 350,
      minHeight: 275,
    },
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
  { title: 'Residential', meta: '', cols: 2, src: '/images/residential-service.webp' },
  { title: 'Commercial', meta: '', cols: 2, src: '/images/commercial_service.webp' },
]

export default function ServicesGridList() {
  const classes = useStyles()
  const mobile = isMobile()
  return (
    <div className={classes.root}>
      <Container
        maxWidth='xl'
        style={{
          padding: '0% 8%',
          zIndex: 1300,
          width: '100vw',
        }}>
        <Typography variant='h2' className={classes.gridTitle} gutterBottom>
          Our Tailored Approach
        </Typography>
        <GridList className={classes.gridList} spacing={10}>
          {servicesData.map((tile) => (
            <GridListTile key={tile.src} className={classes.gridTile}>
              <Image src={tile.src} alt={tile.title} layout='fill' className={classes.tileImg} />
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
  )
}
