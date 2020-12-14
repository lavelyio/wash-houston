import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { motion, AnimatePresence, AnimationFeature } from 'framer-motion'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
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

const commercial = {
  headerText: 'Commercial Services',
  headerDescription: `
    Maintaining the exterior of your business just got easier. 
    Our technicians will deep clean your walkways, parking lots, heavy equipment and much more so you can focus on growing your company.`,
  headerImg: '/images/houston_commercial.jpg',
  body: {
    leadText: 'What We Do',
    sections: [
      {
        title: 'Heavy Equipment',
        img: '/images/heavy_equipment.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Lots',
        img: '/images/parking_lot.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Buildings',
        img: '/images/buildings.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Walkways',
        img: '/images/walkways.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
}

const Commercial = (props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Wash Houston - Commercial Services</title>
        <meta
          name='description'
          content="Houston Wash's Commcericla Services. We'll take care of your heavy equipment, store front, parking lots, building exterior and much more!"
        />
        <meta
          name='keywords'
          content='Pressure Washing, Power Washing, Cleaning, Houston Texas, Cleaning, Wash, Pressure Wash, Power Wash, Power'
        />
        <meta name='author' content='Wash Houston' />
        <meta name='copyright' content='Houston Wash Services, LLC' />
        <meta name='robots' content='commercial,follow' />
      </Head>
      <div>
        <img
          src={commercial.headerImg}
          width='100%'
          style={{ marginBottom: 20, maxHeight: '50vh' }}
        />
        <Container style={{ backgroundColor: '#f8f8f8', height: '100%', paddingBottom: 30 }}>
          <Grid>
            <Box maxWidth='lg' mt={6} style={{ padding: 10 }}>
              <Typography variant='h2' gutterBottom component='h2' color='primary'>
                {commercial.headerText}
              </Typography>
              <Typography
                variant='subtitle1'
                paragraph
                style={{ width: '75%', marginTop: 20, padding: 10 }}>
                {commercial.headerDescription}
              </Typography>
            </Box>
            <Typography
              variant='h4'
              component='h4'
              color='secondary'
              style={{ marginTop: 20, padding: 10 }}>
              {commercial.body.leadText}
            </Typography>
            <GridContainer>
              {commercial?.body.sections &&
                commercial.body.sections.map((section, key) => {
                  return (
                    <AnimatePresence>
                      <GridItem key={key} xs={12} sm={6} md={6} lg={6}>
                        <Card blog raised>
                          <CardHeader image>
                            <Link href='services'>
                              <img
                                src={section.img}
                                alt={section.title}
                                style={{ maxHeight: 300 }}
                              />
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
                              <Typography variant='h5' className={classes.cardCategory}>
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
                    </AnimatePresence>
                  )
                })}
            </GridContainer>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Commercial
