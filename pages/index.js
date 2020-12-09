import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import Initial from '../components/initial'
import theme from '../theme'

const Home = () => (
  <>
    <Head>
      <title>Wash Houston</title>
    </Head>
    <Initial />
  </>
)

export default Home
