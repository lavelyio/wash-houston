import PropTypes from 'prop-types'
import NextApp from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import mediaQuery from 'css-mediaquery'
import parser from 'ua-parser-js'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import '../styles.css'

const mobileSsrMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: '0px',
  }),
})
const desktopSsrMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: '1024px',
  }),
})

const mobileMuiTheme = createMuiTheme({
  ...theme,
  props: {
    // Change the default options of useMediaQuery
    MuiUseMediaQuery: { ssrMatchMedia: mobileSsrMatchMedia },
  },
})
const desktopMuiTheme = createMuiTheme({
  ...theme,
  props: {
    // Change the default options of useMediaQuery
    MuiUseMediaQuery: { ssrMatchMedia: desktopSsrMatchMedia },
  },
})

export default class App extends NextApp {
  static async getInitialProps(ctx) {
    // I'm guessing on this line based on your _document.js example
    const initialProps = await NextApp.getInitialProps(ctx)
    // OP's edit: The ctx that we really want is inside the function parameter "ctx"
    const deviceType = parser(ctx.ctx.req.headers['user-agent']).device.type || 'desktop'
    // I'm guessing on the pageProps key here based on a couple examples
    return { pageProps: { ...initialProps, deviceType } }
  }
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <MuiThemeProvider
        theme={pageProps.deviceType === 'mobile' ? mobileMuiTheme : desktopMuiTheme}>
        <ThemeProvider theme={theme}>
          <Head>
            {' '}
            <title>Wash Houston</title>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}
