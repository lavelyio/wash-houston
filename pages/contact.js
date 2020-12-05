import React from 'react'
import Head from 'next/head'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import theme from '../theme'

export default function contact(props) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link rel='manifest' href='site.webmanifest.json'></link>
        <title>Wash Houston - Contact Us</title>
      </Head>
      <ThemeProvider theme={createMuiTheme(theme)}></ThemeProvider>
    </>
  )
}
