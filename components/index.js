import React from 'react'
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion'
import Header from './header'
import Footer from './footer'
import Grid from '@material-ui/core/Grid'
const sections = [
  { title: 'Residential', url: 'residential' },
  { title: 'Commerical', url: 'commercial' },
  { title: 'Our Work', url: 'gallery' },
]

const AppLayout = (props) => {
  const { children, router } = props
  return (
    <>
      <Header title='Wash Houston' sections={sections} />
      <AnimateSharedLayout>
        <Grid item xs={12} style={{ backgroundColor: '#f8f8f8' }}>
          <motion.div
            key={router?.route}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}>
            {children}
          </motion.div>
        </Grid>
      </AnimateSharedLayout>
      <Footer />
    </>
  )
}

export default AppLayout
