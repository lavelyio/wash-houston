import React, { useEffect, lazy, Suspense } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
const ImageSlider = lazy(() => import('react-image-comparison-slider'))
import { isMobile } from '../../utils'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    height: 400,
    padding: 20,
    background: 'transparent',
    borderRadius: '6px',
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
    height: 400,
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
            image1={`${window.location.href}images/compare/drivethrough-after.webp`}
            image2={`${window.location.href}images/compare/drivethrough-before.webp`}
            sliderWidth={1}
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
