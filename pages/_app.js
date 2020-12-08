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
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
              name='viewport'
              content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta
              name='description'
              content="The Greater Houston Area's Most Trusted Power Cleaning, Pressure Washing Company"
            />
            <meta
              name='keywords'
              content='Pressure Washing, Power Washing, Cleaning, Houston Texas, Cleaning, Wash, Pressure Wash, Power Wash, Power'
            />
            <meta name='author' content='Wash Houston' />
            <meta name='copyright' content='Houston Wash Services, LLC' />
            <meta name='robots' content='index,follow' />
            <meta
              name='keywords'
              content='Pressure Wash Power Washing Houston Texas Cleaning Residential Power Washing'
            />
            <title>Wash Houston</title>

            {/* Android */}
            <meta name='theme-color' content='red' />
            <meta name='mobile-web-app-capable' content='yes' />

            {/* iOS */}
            <meta name='apple-mobile-web-app-title' content='Application Title' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />

            {/* Windows */}
            <meta name='msapplication-navbutton-color' content='red' />
            <meta name='msapplication-TileColor' content='red' />
            <meta name='msapplication-TileImage' content='ms-icon-144x144.png' />
            <meta name='msapplication-config' content='browserconfig.xml' />

            {/* Pinned Sites */}
            <meta name='application-name' content='Application Name' />
            <meta name='msapplication-tooltip' content='Tooltip Text' />
            <meta name='msapplication-starturl' content='/' />

            {/* Tap highlighting */}
            <meta name='msapplication-tap-highlight' content='no' />

            {/* UC Mobile Browser */}
            <meta name='full-screen' content='yes' />
            <meta name='browsermode' content='application' />

            {/* Disable night mode for this page */}
            <meta name='nightmode' content='enable/disable' />

            {/* Fitscreen */}
            <meta name='viewport' content='uc-fitscreen=yes' />

            {/* Layout mode */}
            <meta name='layoutmode' content='fitscreen/standard' />

            {/* imagemode - show image even in text only mode */}
            <meta name='imagemode' content='force' />

            {/* Orientation */}
            <meta name='screen-orientation' content='portrait' />
            <link rel='manifest' href='dunplab-manifest-35608.json' />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}
