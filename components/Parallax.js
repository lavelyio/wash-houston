import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { motion, useElementScroll, useTransform, useAnimation } from 'framer-motion'
import { makeStyles } from '@material-ui/core'
import { useInView } from 'react-intersection-observer'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    perspective: '1200px',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 50,
    zIndex: '1',
  },
  overlay: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  img: {
    width: '100vw',
    height: '100vh',
    transform: 'translateZ(0)',
  },
}))

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 300 },
}

const Box = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} animate={controls} initial='hidden' variants={BoxVariants}></motion.div>
  )
}

const ParallaxImage = ({ children, src, ...style }) => {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useElementScroll()
  console.log(scrollY)
  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div ref={ref} className={classes.imageContainer}>
        <motion.div className={classes.overlay} style={{ y }}>
          {children}
        </motion.div>
        <img className={classes.img} src={src} alt='' />
      </div>
    </div>
  )
}

export default ParallaxImage
