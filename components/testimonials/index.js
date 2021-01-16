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

const testimonials = [
  {
    customer: 'Patricia Murray',
    date: '12/11/2020',
    description: 'Very happy with the end results, thank you!',
    img:
      'https://lh3.googleusercontent.com/-fTLPWhDssq8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckXLjkzSrhjT9mgp4jz2A-cuMz78A/s50-c-c0x00000000/photo.jpg',
    rating: 5,
  },
  {
    customer: 'Jeanie Mullin',
    date: '12/13/2020',
    description: `
    I was very impressed with Mike Smith’s turnaround time in 
    getting back to me for an estimate. We were so happy to get 
    on his schedule and extremely pleased with the final results! 
    Following the power washing of our home, the paint job/color 
    looked brand new! Back patio looks great as the mold is now 
    gone! Even the driveway looks so much better in it’s original 
    lor!! If you are looking for an honest guy who knows his 
    stuff, contact Mike Smith with Wash Houston. You will be 
    amazed how great your home exterior and concrete can look 
    again.
    `,
    img:
      'https://lh3.googleusercontent.com/a-/AOh14Gi86SeqfaDLdNf4h_PTOZ25d4cK5ZtuabIIM8xQ=s50-c-c0x00000000',
    rating: 5,
  },
  {
    customer: 'Barbara Howell',
    date: '12/18/2020',
    description: `
    Mike power washed my driveway, front porch, and 
    sidewalks. You don’t realize how dirty they are 
    until you see the filthy water run off. It was gross. 
    When he was finished, it looked like I had just poured 
    new concrete! Thank you for doing such a great job.
    `,
    img:
      'https://lh3.googleusercontent.com/-bgbEXqy9Wns/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnSBdt97JWMx97Lg4pQorbQLq6Sjw/s50-c-c0x00000000/photo.jpg',
    rating: 5,
  },
  {
    customer: 'Tammy Buchanan',
    date: '12/18/2020',
    description: `
    This company is probably one of the most professional 
    companies we’ve ever dealt with. His prices were fair and 
    he did quality work! We’d recommend him for any of the 
    services they provide. Plus, he’s a really nice guy.
    `,
    img:
      'https://lh3.googleusercontent.com/-5tpXTJcfzE4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmxYucPnUVsZ7xYl6svulUL1yPf-w/s50-c-c0x00000000/photo.jpg',
    rating: 5,
  },
]

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
            {testimonials.map((review, i) => {
              return (
                <div key={i}>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href='#pablo' onClick={(e) => e.preventDefault()}>
                        <img src={review.img} alt={`Image of ${review.customer}`} />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}
                        {review.description}
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>{review.customer}</h4>
                      <Muted>
                        <h6>{review.date}</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      {Array.from(Array(review.rating), (e, i) => {
                        return (
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                        )
                      })}
                    </div>
                  </Card>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
      {/* Testimonials 2 END */}
    </div>
  )
}
