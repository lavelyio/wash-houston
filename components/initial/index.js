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
import Services from '../services'
import Main from '../main'
import Sidebar from '../sidebar'
import Footer from '../footer'
import { post1, post2, post3 } from '../posts'
import Gallery from '../gallery'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
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
  description: `Houston's first choice for top quality pressure washing, 
        roof cleaning, and exterior property restoration services. `,
  image: '/images/spacecity-bg.jpg',
  imgText: 'main image description',
  linkText: 'Contact Us…',
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='Wash Houston' sections={sections} />
        <main>
          <Hero post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Services key={post.title} post={post} />
            ))}
          </Grid>
          <Grid spacing={4} container style={{ marginTop: 10, padding: 10 }}>
            <Typography variant='h3' component='p' align='center'>
              Our Recent Work
            </Typography>
            <Gallery />
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title='From the nozzle' posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title='Footer' description='Something here to give the footer a purpose!' />
    </React.Fragment>
  )
}
