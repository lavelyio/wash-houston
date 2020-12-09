import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
const Residential = (props) => {
  console.log(props)

  return (
    <>
      <Head>
        <title>Wash Houston - Residential Services</title>
      </Head>
      <Container>
        <Typography variant='h1'> Test</Typography>
      </Container>
    </>
  )
}

export default Residential
