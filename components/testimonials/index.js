import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Star from '@material-ui/icons/Star'
// core components
import Card from '../../lib/components/Card/Card.js'
import CardBody from '../../lib/components/Card/CardBody.js'
import CardFooter from '../../lib/components/Card/CardFooter.js'
import CardAvatar from '../../lib/components/Card/CardAvatar.js'
import Muted from '../../lib/components/Typography/Muted.js'
import Warning from '../../lib/components/Typography/Warning.js'

import testimonialsStyle from '../../lib/assets/jss/lavelyio-pro/views/sectionsSections/testimonialsStyle.js'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ ...testimonialsStyle, slick: { display: 'flex' } }))

export default function Testimonials({ ...rest }) {
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div {...rest}>
      {/* Testimonials 2 START */}
      <div
        className={classes.testimonials + ' ' + classes.sectionDark + ' ' + classes.testimonial2}>
        <div className={classes.container}>
          <Typography variant='h3' gutterBottom style={{ color: '#fff' }}>
            What our customers are saying
          </Typography>
          <Carousel {...settings}>
            <div>
              <Card testimonial plain className={classes.card2}>
                <CardAvatar testimonial plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/images/user1.jpg' alt='...' />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h5 className={classes.cardDescription}>
                    {'"'}I speak yell scream directly at the old guard on behalf of the future. I
                    gotta say at that time I’d like to meet Kanye I speak yell scream directly at
                    the old guard on behalf of the future. My brother Chance!!!
                    <br />
                    Thank you for letting me work on this masterpiece. One of my favorite people.
                    {'"'}
                  </h5>
                  <h4 className={classes.cardTitle}>Kendall Thompson</h4>
                  <Muted>
                    <h6>CEO @ Marketing Digital Ltd.</h6>
                  </Muted>
                </CardBody>
                <div>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                </div>
              </Card>
            </div>
            <div>
              <Card testimonial plain className={classes.card2}>
                <CardAvatar testimonial plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/images/user2.jpg' alt='...' />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h5 className={classes.cardDescription}>
                    {'"'}Thank you Anna for the invite thank you to the whole Vogue team Called I
                    Miss the Old Kanye At the God
                    {"'"}s last game Chop up the soul Kanye. I promise I will never let the people
                    down. I want a better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna
                    for the invite thank you to the whole Vogue team.{'"'}
                  </h5>
                  <h4 className={classes.cardTitle}>Christian Louboutin</h4>
                  <Muted>
                    <h6>Designer @ Louboutin & Co.</h6>
                  </Muted>
                </CardBody>
                <div>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                  <Warning>
                    <Star className={classes.starIcons} />
                  </Warning>
                </div>
              </Card>
            </div>
          </Carousel>
        </div>
      </div>
      {/* Testimonials 2 END */}
    </div>
  )
}
