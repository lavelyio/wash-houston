import React from 'react'
import Header from './header'
import Footer from './footer'
import Grid from '@material-ui/core/Grid'
const sections = [
  { title: 'Residential', url: 'residential' },
  { title: 'Commerical', url: '#' },
  { title: 'Products We Use', url: '#' },
  { title: 'Our Work', url: '#' },
  { title: 'Contact Us', url: '#' },
]

const AppLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header title='Wash Houston' sections={sections} />
      <Grid item xs={12}>
        {children}
      </Grid>
      <Footer />
    </>
  )
}

export default AppLayout
