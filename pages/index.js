import React from 'react'
import Head from 'next/head'
import Initial from '../components/initial'

const Home = () => (
  <>
    <Head>
      <title>Wash Houston</title>
      <script async src='https://www.googletagmanager.com/gtag/js?id=G-431QJNV24K'></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-431QJNV24K');
      </script>
    </Head>
    <Initial />
  </>
)

export default Home
