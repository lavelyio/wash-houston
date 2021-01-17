import React from 'react'
import { NextSeo } from 'next-seo'
import Container from '@material-ui/core/Container'
import { Box, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridContainer from '../lib/components/Grid/GridContainer'
import GridItem from '../lib/components/Grid/GridItem'
import Card from '../lib/components/Card/Card'
import CardHeader from '../lib/components/Card/CardHeader'
import CardBody from '../lib/components/Card/CardBody'
import CardFooter from '../lib/components/Card/CardFooter'
import Info from '../lib/components/Typography/Info'
import cardStyles from '../lib/assets/jss/lavelyio-pro/views/componentsSections/sectionCards.js'
import { Error } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  ...cardStyles,
  mainFeaturedPost: {
    position: 'relative',
    height: '105vh',
    width: '100vw',
    marginTop: '-115px', // Header is 114px rendered
    paddingBottom: '115px',
    backgroundColor: theme.palette.grey[800],
    color: '#d0d0d2',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  mainFeaturedPostContent: {
    position: 'absolute',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    textShadow: '1px 1px black',
  },
  sectionCard: {
    height: 225,
  },
  pageDescription: {
    width: '75%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
}))

const residential = {
  headerText: 'Residential Services',
  headerDescription: `
    Worrying about your patio, deck, driveway and siding has never been easier. 
    Our technicians will take care of the dirty work so you can enjoy your time with 
    friends or family and spend less time thinking about the dirty sidewalk.`,
  headerImg: '/images/wash_houston_residential_services.webp',
  body: {
    leadText: 'What We Offer',
    sections: [
      {
        title: 'House Washing',
        img: '/images/siding.webp',
        description: `
        Thank goodness we live in Houston, Texas & on the gulf coast! 
        It provides great weather 9 months out of the year. Unfortunately, this is 
        ideal for mold and algae. We can restore your home with 
        ‘Soft wash’ technology that will not apply pressure. Damage free cleaning!`,
        specialText: ``,
      },
      {
        title: 'Roof Cleaning',
        img: '/images/wash_houston_roof_cleaning.webp',
        description: `
        Here in the humid Houston area, mildew and algae typically build up on roofs, 
        leaving unsightly black spots and discoloration.Not only is it unattractive, 
        but this also could potentially cost you a roof! Algae and mildew hold moisture 
        on your roof; creating an opportunity to rot if left alone. 
        In the short term the dark discoloration will cause your roof to be much warmer, 
        increasing your energy bill! `,
        specialText: `
        Roof cleaning is a dangerous job & hard work. 
        Let Wash Houston, your professional pressure washing company in Houston, 
        do the dirty work for you!`,
      },
      {
        title: 'Fences & Decks',
        img: '/images/decks.webp',
        description: `
        We use soft washing technology to remove 
        mold and algae without damaging your fence or deck. 
        Our stripping process will restore your wood to its natural color and 
        revive your wood to its former glory!`,
        specialText: ``,
      },
      {
        title: 'Drive/Walkways',
        img: '/images/driveways.webp',
        description: `
        One of the most visually satisfying parts of pressure washing, 
        is surface cleaning. Our technicians can clean most driveways 
        and walkways within an hour. We pressure wash sidewalks, driveways, & patios. `,
        specialText: ``,
      },
      {
        title: 'Window Washing',
        img: '/images/wash_houston_window_washing.webp',
        description: `
        Getting your windows clean is a specialized skill. 
        Thats why many of our competitors ‘don’t do windows’. 
        Wash Houston, has had the opportunity to hone that skill. 
        You can trust our technicians to treat your screens and windows with experience `,
        specialText: ``,
      },
    ],
  },
}

const Residential = (props) => {
  const classes = useStyles()

  return (
    <>
      <NextSeo
        title='Wash Houston - Residential Services'
        description="Wash Houston's Residential Services. We'll take care of your patio, driveway, deck, siding and all other outdoor needs."
        canonical='https://houstonwash.com/residential'
        openGraph={{
          url: 'https://houstonwash.com/residential',
          title: 'Wash Houston, Residential',
          description: 'See what we can do for your home.',
          images: [
            {
              url: 'https://houstonwash.com/residential-service.webp',
              width: 800,
              height: 800,
              alt: 'Wash Houston',
            },
            {
              url: 'https://houstonwash.com/driveways.webp',
              width: 900,
              height: 800,
              alt: 'Wash Houston',
            },
          ],
        }}
      />
      <img
        src={residential.headerImg}
        width='100%'
        style={{ marginBottom: 20, maxHeight: '50vh' }}
      />
      <Container style={{ backgroundColor: '#f8f8f8', height: '100%', paddingBottom: 30 }}>
        <Grid>
          <Box maxWidth='lg' mt={6} style={{ padding: 10 }}>
            <Typography variant='h2' gutterBottom component='h2' color='primary'>
              {residential.headerText}
            </Typography>
            <Typography
              variant='subtitle1'
              paragraph
              style={{ width: '75%', marginTop: 20, padding: 10 }}>
              {residential.headerDescription}
            </Typography>
          </Box>
          <GridContainer>
            {residential?.body.sections &&
              residential.body.sections.map((section, key) => {
                return (
                  <GridItem xs={12} sm={6} md={6} lg={6}>
                    <Card blog raised>
                      <CardHeader image>
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          src={section.img}
                          alt={`Wash Houston - ${section.title}`}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: ``,
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Info>
                          <Typography
                            variant='h4'
                            color='secondary'
                            className={classes.cardCategory}>
                            {section.title}
                          </Typography>
                        </Info>
                        <div className={classes.cardDescription}>{section.description}</div>
                      </CardBody>
                      <CardFooter>
                        {section.specialText && (
                          <Box>
                            <Error color='error' />
                            <Typography variant='caption' color='error'>
                              {section.specialText}
                            </Typography>
                          </Box>
                        )}
                      </CardFooter>
                    </Card>
                  </GridItem>
                )
              })}
          </GridContainer>
        </Grid>
      </Container>
    </>
  )
}

export default Residential
