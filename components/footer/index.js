import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'

import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography
      variant='body2'
      color='inherit'
      align='center'
      style={{ position: 'relative', bottom: '5px', width: '100%' }}>
      {'Copyright © '}
      <Link color='inherit' href='https://wash-houston.com/'>
        Wash Houston Services, LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const content = () => (
  <div class='elementor-row'>
    <div>
      <div>
        <div class='elementor-widget-wrap'>
          <div
            class='elementor-element elementor-element-7efba82 elementor-widget elementor-widget-heading'
            data-id='7efba82'
            data-element_type='widget'
            data-widget_type='heading.default'>
            <div class='elementor-widget-container'>
              <h4 class='elementor-heading-title elementor-size-default'>Contact</h4>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-d41e2eb elementor-widget elementor-widget-spacer'
            data-id='d41e2eb'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-5023ae1c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list'
            data-id='5023ae1c'
            data-element_type='widget'
            data-widget_type='icon-list.default'>
            <div class='elementor-widget-container'>
              <ul class='elementor-icon-list-items'>
                <li class='elementor-icon-list-item'>
                  <span class='elementor-icon-list-icon'>
                    <i class='fa fa-phone' aria-hidden='true'></i>
                  </span>
                  <span class='elementor-icon-list-text'>+0800-0933-267</span>
                </li>
                <li class='elementor-icon-list-item'>
                  <span class='elementor-icon-list-icon'>
                    <i class='fa fa-envelope' aria-hidden='true'></i>
                  </span>
                  <span class='elementor-icon-list-text'>info@cleaning-service.uk.com</span>
                </li>
                <li class='elementor-icon-list-item'>
                  <span class='elementor-icon-list-icon'>
                    <i class='fa fa-address-book' aria-hidden='true'></i>
                  </span>
                  <span class='elementor-icon-list-text'>
                    491 SD Office Wight Moss Way Southport Merseyside, PR84ZZ
                  </span>
                </li>
                <li class='elementor-icon-list-item'>
                  <span class='elementor-icon-list-icon'>
                    <i class='fa fa-clock-o' aria-hidden='true'></i>
                  </span>
                  <span class='elementor-icon-list-text'>Mon - Sat: 8:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-dd97d9e elementor-widget elementor-widget-spacer'
            data-id='dd97d9e'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class='elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-29add01b'
      data-id='29add01b'
      data-element_type='column'>
      <div class='elementor-column-wrap elementor-element-populated'>
        <div class='elementor-widget-wrap'>
          <div
            class='elementor-element elementor-element-6a68181a elementor-widget elementor-widget-heading'
            data-id='6a68181a'
            data-element_type='widget'
            data-widget_type='heading.default'>
            <div class='elementor-widget-container'>
              <h4 class='elementor-heading-title elementor-size-default'>Services</h4>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-278e6d3 elementor-widget elementor-widget-spacer'
            data-id='278e6d3'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-2ad2a91a elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list'
            data-id='2ad2a91a'
            data-element_type='widget'
            data-widget_type='icon-list.default'>
            <div class='elementor-widget-container'>
              <ul class='elementor-icon-list-items'>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/jet-washing'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Jet washing service</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/driveway-patio-cleaning'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Driveway &amp; Patio cleaning</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/roof-cleaning-moss-removal-service'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Roof cleaning moss removal</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/artifical-grass-and-tennis-court-cleaning'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Tennis court cleaning</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/building-cleaning-company'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Building cleaning service</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/k-rend-render-cleaning-service'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Render cleaning service</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-fbd0401 elementor-widget elementor-widget-spacer'
            data-id='fbd0401'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class='elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-65323c7b'
      data-id='65323c7b'
      data-element_type='column'>
      <div class='elementor-column-wrap elementor-element-populated'>
        <div class='elementor-widget-wrap'>
          <div
            class='elementor-element elementor-element-39d585c1 elementor-widget elementor-widget-heading'
            data-id='39d585c1'
            data-element_type='widget'
            data-widget_type='heading.default'>
            <div class='elementor-widget-container'>
              <h4 class='elementor-heading-title elementor-size-default'>Important Links</h4>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-3794a69 elementor-widget elementor-widget-spacer'
            data-id='3794a69'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-ca78f46 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list'
            data-id='ca78f46'
            data-element_type='widget'
            data-widget_type='icon-list.default'>
            <div class='elementor-widget-container'>
              <ul class='elementor-icon-list-items'>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Home</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/blog'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Blog</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/about-us'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>About Us</span>
                  </a>
                </li>
                <li class='elementor-icon-list-item'>
                  <a href='https://www.cleaning-service.uk.com/contact'>
                    {' '}
                    <span class='elementor-icon-list-icon'>
                      <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
                    </span>
                    <span class='elementor-icon-list-text'>Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-3f769063 elementor-widget elementor-widget-spacer'
            data-id='3f769063'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class='elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2715e711'
      data-id='2715e711'
      data-element_type='column'>
      <div class='elementor-column-wrap elementor-element-populated'>
        <div class='elementor-widget-wrap'>
          <div
            class='elementor-element elementor-element-77f62f67 elementor-widget elementor-widget-heading'
            data-id='77f62f67'
            data-element_type='widget'
            data-widget_type='heading.default'>
            <div class='elementor-widget-container'>
              <h4 class='elementor-heading-title elementor-size-default'>Cleaning</h4>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-1dc563b elementor-widget elementor-widget-spacer'
            data-id='1dc563b'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-4000919f elementor-widget elementor-widget-text-editor'
            data-id='4000919f'
            data-element_type='widget'
            data-widget_type='text-editor.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-text-editor elementor-clearfix'>
                <p>
                  The UK’S premier jet washing and render cleaning company. Simply send us mail or a
                  call to get free quote.
                </p>
              </div>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-17aed270 elementor-shape-circle elementor-grid-0 elementor-widget elementor-widget-social-icons'
            data-id='17aed270'
            data-element_type='widget'
            data-widget_type='social-icons.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-social-icons-wrapper elementor-grid'>
                <div class='elementor-grid-item'>
                  <a
                    class='elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-4984514'
                    href='https://www.facebook.com/cleaningserviceltd'
                    target='_blank'>
                    <span class='elementor-screen-only'>Facebook</span>
                    <i class='fa fa-facebook'></i>
                  </a>
                </div>
                <div class='elementor-grid-item'>
                  <a
                    class='elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-294e006'
                    href='https://uk.linkedin.com/company/cleaning-service-uk'
                    target='_blank'>
                    <span class='elementor-screen-only'>Linkedin</span>
                    <i class='fa fa-linkedin'></i>
                  </a>
                </div>
                <div class='elementor-grid-item'>
                  <a
                    class='elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-bd25b55'
                    href='https://twitter.com/CSuk_Southport'
                    target='_blank'>
                    <span class='elementor-screen-only'>Twitter</span>
                    <i class='fa fa-twitter'></i>
                  </a>
                </div>
                <div class='elementor-grid-item'>
                  <a
                    class='elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-9899acf'
                    href='https://www.youtube.com/channel/UC0T0rCQUsVGuc4j8BBVds3g'
                    target='_blank'>
                    <span class='elementor-screen-only'>Youtube</span>
                    <i class='fa fa-youtube'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class='elementor-element elementor-element-2b4cf998 elementor-widget elementor-widget-spacer'
            data-id='2b4cf998'
            data-element_type='widget'
            data-widget_type='spacer.default'>
            <div class='elementor-widget-container'>
              <div class='elementor-spacer'>
                <div class='elementor-spacer-inner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(25 66 111 / 0.7)',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'rgb(25 66 111 / 0.9)',
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <Typography component='footer' className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          {/*<Grid item xs={6}>
            <Typography variant='h6' marked='left' gutterBottom>
              Contact
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href='/premium-themes/onepirate/terms/'>Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href='/premium-themes/onepirate/privacy/'>Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' marked='left' gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href='/premium-themes/onepirate/terms/'>Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href='/premium-themes/onepirate/privacy/'>Privacy</Link>
              </li>
            </ul>
          </Grid>
  */}
          <Grid item xs={12}>
            <Typography variant='h6' marked='left' gutterBottom>
              Murals
            </Typography>
            <Typography variant='body2'>
              Consider donating to{' '}
              <Link to='https://www.artleaguehouston.org/support-us'>Art League of Houston </Link>
              to support our local Artisans and keep Houston beautiful.{' '}
              <FavoriteOutlinedIcon style={{ marginLeft: 5, color: 'red' }} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction='column'
              justify='flex-end'
              className={classes.iconsWrapper}
              spacing={4}>
              <Grid item className={classes.icons}>
                <a
                  href='https://m.facebook.com/WashHoustonTX/?ref=bookmarks'
                  className={classes.icon}>
                  <img src='/images/facebook-icon.png' alt='Wash Houston, Facebook' />
                </a>
                <a href='https://g.page/wash-houston?gm' className={classes.icon}>
                  <img src='/images/googlemaps-icon.png' height='48px' alt='Wash Houston, Google' />
                </a>
              </Grid>
              <Grid item xs={6}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Link href='https://lavely.io' target='_' rel='sponsored' title='LavelyIO'>
              <img src='/images/developedby_lavelyio.png' height={25} width={100} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
