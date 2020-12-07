import React, { useEffect, lazy, Suspense } from 'react'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
const ImageSlider = lazy(() => import('react-image-comparison-slider'))
import { isMobile } from '../../utils'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

const ComparisonSlider = (props) => {
  const [mounted, setMounted] = React.useState(false)
  const [dimensions, setDimensions] = React.useState({
    height: '75%',
    width: '100%',
  })
  useEffect(() => {
    if (!mounted) setMounted(true)
  })

  const classes = useStyles()

  if (mounted) {
    return (
      <Suspense fallback={<p>Loading</p>}>
        <Card className={classes.card} style={dimensions}>
          <ImageSlider
            image1={`${window.location.href}images/compare/drivethrough-after.png`}
            image2={`${window.location.href}images/compare/drivethrough-before.png`}
            sliderWidth={2}
            sliderColor='red'
            handleColor='red'
            handleBackgroundColor='white'
          />
        </Card>
      </Suspense>
    )
  } else return null
}

export default ComparisonSlider
