import React from 'react'
import Header from './header'
import Footer from './footer'
import Grid from '@material-ui/core/Grid'
const sections = [
  { title: 'Residential', url: 'residential' },
  { title: 'Commerical', url: 'commercial' },
  { title: 'Products We Use', url: 'products' },
  { title: 'Our Work', url: 'gallery' },
  { title: 'Contact Us', url: 'contact' },
  { title: 'About Us', url: 'about' },
]

const AppLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header title='Wash Houston' sections={sections} />
      <Grid item xs={12} style={{ backgroundColor: '#f8f8f8' }}>
        {children}
      </Grid>
      <Footer />
    </>
  )
}

export default AppLayout
