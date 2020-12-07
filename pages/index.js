import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import Initial from '../components/initial'
import theme from '../theme'

const Home = () => (
  <>
    <Head>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link rel='manifest' href='site.webmanifest.json'></link>
      <title>Wash Houston</title>
    </Head>
    <style jsx>{`
      :global(html, body) {
        background-color: #f8f8f8;
      }
      :global .scroll-container {
        position: fixed;
        top: 50px;
        right: 50px;
        bottom: 50px;
        left: 50px;
        background-color: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
      }

      :global .scroll-container:before {
        content: 'in this <div>';
        position: fixed;
        display: inline-block;
        padding: 4px;
        top: 10px;
        left: 50%;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        color: white;
        z-index: 1000;
        transform: translate3d(-50%, 0, 0);
        top: 60px;
      }

      :global .vertical {
        width: 100%;
        min-height: 300vh;
        overflow-x: hidden;
      }

      :global .vertical:before {
        content: '↑ Scroll ↓';
        position: fixed;
        display: inline-block;
        padding: 4px;
        top: 10px;
        left: 50%;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        color: white;
        z-index: 1000;
        transform: translate3d(-50%, 0, 0);
      }

      :global .horizontal {
        height: 100%;
        min-width: 300vw;
        overflow-y: hidden;
      }

      :global .horizontal:before {
        content: '← Scroll →';
        position: fixed;
        display: inline-block;
        padding: 4px;
        top: 10px;
        left: 50%;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        color: white;
        z-index: 1000;
        transform: translate3d(-50%, 0, 0);
      }

      :global .parallax-outer {
        background-color: rgba(255, 255, 255, 0.05);
      }

      :global .parallax-inner {
        will-change: transform;
      }
    `}</style>
    <ThemeProvider theme={theme}>
      <Initial />
    </ThemeProvider>
  </>
)

export default Home
