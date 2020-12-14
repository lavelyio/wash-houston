import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridContainer from '../lib/components/Grid/GridContainer'
import GridItem from '../lib/components/Grid/GridItem'
import Card from '../lib/components/Card/Card'
import CardHeader from '../lib/components/Card/CardHeader'
import CardBody from '../lib/components/Card/CardBody'
import CardFooter from '../lib/components/Card/CardFooter'
import Info from '../lib/components/Typography/Info'
import Link from 'next/link'
import cardStyles from '../lib/assets/jss/lavelyio-pro/views/componentsSections/sectionCards.js'

import ContactUsButton from '../components/buttons/ContactUsButton'

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
}))

const residential = {
  headerText: 'Residential Services',
  headerDescription: `
    Worrying about your patio, deck, driveway and siding has never been easier. 
    Our technicians will take care of the dirty work so you can enjoy your time with 
    friends or family and spend less time thinking about the dirty sidewalk.`,
  headerImg: '/images/houston_residential.jpg',
  body: {
    leadText: 'What We Offer',
    sections: [
      {
        title: 'Patio',
        img: '/images/patios.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Decks',
        img: '/images/decks.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Driveways',
        img: '/images/driveways.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Siding',
        img: '/images/siding.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
}

const Residential = (props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Wash Houston - Residential Services</title>
        <meta
          name='description'
          content="Houston Wash's Residential Services. We'll take care of your patio, driveway, deck, siding and all other outdoor needs."
        />
        <meta
          name='keywords'
          content='Pressure Washing, Power Washing, Cleaning, Houston Texas, Cleaning, Wash, Pressure Wash, Power Wash, Power'
        />
        <meta name='author' content='Wash Houston' />
        <meta name='copyright' content='Houston Wash Services, LLC' />
        <meta name='robots' content='index,follow' />
      </Head>
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
          <Typography
            variant='h4'
            component='h4'
            color='secondary'
            style={{ marginTop: 20, padding: 10 }}>
            What we excel at
          </Typography>
          <GridContainer>
            {residential?.body.sections &&
              residential.body.sections.map((section, key) => {
                return (
                  <GridItem xs={12} sm={6} md={6} lg={6}>
                    <Card blog raised>
                      <CardHeader image>
                        <Link href='services'>
                          <img src={section.img} alt='...' />
                        </Link>
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
                          <Typography variant='h4' className={classes.cardCategory}>
                            {section.title}
                          </Typography>
                        </Info>
                        <div className={classes.cardDescription}>{section.description}</div>
                      </CardBody>
                      <CardFooter>
                        <ContactUsButton />
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
