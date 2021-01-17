import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core/styles'
import { motion, AnimatePresence } from 'framer-motion'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 1300,
    justifyContent: 'center',
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
    textShadow: '2px 2px #fff',
  },
  gridTile: {
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 6,
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
    borderRadius: 6,
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
  {
    title: 'Residential',
    meta:
      'We treat your home like it`s our own. Using the best cleaning materials for children and pets, you can rest easy knowing we don`t bring toxic checmicals with us.',
    cols: 2,
    src: '/images/residential-service.webp',
  },
  { title: 'Commercial', meta: '', cols: 2, src: '/images/commercial_service.webp' },
]

export default function ServicesGridList() {
  const [isMounted, setMounted] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    if (!isMounted) setMounted(true)
  }, [])
  if (isMounted) {
    const Gallery = dynamic(() => import('../gallery'))
    return (
      <div className={classes.root}>
        <Container
          maxWidth='xl'
          style={{
            padding: '8% 8%',
            zIndex: 1300,
            width: '100%',
          }}>
          <Typography
            id='Second'
            variant='h3'
            className={classes.gridTitle}
            color='primary'
            gutterBottom>
            Our Tailored Approach
          </Typography>
          <AnimatePresence>
            <GridList className={classes.gridList} spacing={10}>
              {servicesData.map((tile) => (
                <GridListTile
                  key={tile.src}
                  className={classes.gridTile}
                  style={{ borderRadius: 6 }}>
                  <img src={tile.src} alt={tile.title} className={classes.tileImg} />

                  <GridListTileBar
                    title={tile.title}
                    subtitle={
                      <Typography variant='caption' style={{ maxwidth: '60%', padding: 5 }}>
                        {tile.meta}
                      </Typography>
                    }
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
          </AnimatePresence>
          <Gallery />
        </Container>
      </div>
    )
  } else return null
}
