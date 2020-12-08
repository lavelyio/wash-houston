import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Header from '../header'
import Hero from '../hero'
import ServicesGridList from '../services/ServicesGridList'
import Main from '../main'
import Sidebar from '../sidebar'
import Footer from '../footer'
import { post1, post2, post3 } from '../posts'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Gallery from '../gallery'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    background: '#fefefe',
  },
  parallaxChildren: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  mural: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bannerBg: {
    background: 'rgba(0,0,0,0)',
  },

  customChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
  },
}))

const sections = [
  { title: 'Residential', url: '#' },
  { title: 'Commerical', url: '#' },
  { title: 'Products We Use', url: '#' },
  { title: 'Our Work', url: '#' },
  { title: 'Contact Us', url: '#' },
]

const mainFeaturedPost = {
  title: 'Wash Houston',
  description: `We live and breathe Houston, and take pride in our city. Thats why we're Greater Houston Area's first choice for top quality pressure washing, 
        roof cleaning, and exterior property restoration services for residential and commercial customers. Let's help celebrate our city's culture by
        keeping it clean.`,
  image: '/images/spacecity-bg.webp',
  imgText: 'main image description',
  linkText: 'Contact Us',
}

const bodyText = ` We provide many services to enhance and 
        maintain the overall quality of your home or business.  You can put your trust in us, with over 20 years 
        pressure washing and roof cleaning experience in the Greater Houston area.  
        
        We have continued to perfect our services, while protecting and maintaining the curb appeal of your home or business.  
        With regular pressure washing and chemically cleaning your roof, you can extend the lifespan of your siding, brick, roof, deck, and driveway.  
        Whether you manage a large apartment complex or need a small porch or deck cleaned, no job is too big or too small.  
        Give us a call and let the professionals handle the job..`

const featuredPosts = [
  {
    title: 'Residential',
    date: 'Nov 12',
    description: 'Clean your deck, driveway, patio, sidewalks and more at tour residence.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Commercial',
    date: 'Nov 11',
    description:
      "Hire us to maintain your business' clean atmosphere. We offer lower than market rates for repeat work.",
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
]

const posts = [post1, post2, post3]

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

export default function Initial() {
  const classes = useStyles()

  return (
    <ParallaxProvider>
      <Header title='Wash Houston' sections={sections} />
      <Hero post={mainFeaturedPost} />
      <ParallaxBanner
        className={classes.mural}
        layers={[
          {
            image: '/images/murals/Houston-Heights-Mural-mobile.webp',
            amount: 0.2,
          },
        ]}>
        <div
          style={{
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1300,
            justifyContent: 'center',
          }}>
          <Container style={{ backgroundColor: 'rgba(245, 245, 245, 0.8)' }}>
            <Typography color='secondary' variant='h4'>
              Maintaining local treasures is a goal of ours
            </Typography>
          </Container>
        </div>
      </ParallaxBanner>
      <ServicesGridList />
      <Gallery />
      <Container maxWidth='lg'>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title='From the nozzle' posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer title='Footer' description='Something here to give the footer a purpose!' />
    </ParallaxProvider>
  )
}
