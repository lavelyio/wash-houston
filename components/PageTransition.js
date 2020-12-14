import { motion } from 'framer-motion'

export default function PageTransition(props) {
  const { children, pageProps, router }
  return (
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
  )
}
