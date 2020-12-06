import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Container from '@material-ui/core/Container'
import GridListTile from '@material-ui/core/GridListTile'
import ComparisonSlider from './ComparisonSlider'
import { isMobile } from '../../utils'

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 450,
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={6}>
          <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={2}>
              {images.map((tile) => (
                <GridListTile key={tile.src} cols={tile.cols || 1}>
                  <img src={tile.src} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <ComparisonSlider />
        </Grid>
      </Grid>
    </div>
  )
}

export default Gallery
