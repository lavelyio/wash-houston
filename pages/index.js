import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Initial from "../components/initial";
import theme from "../theme";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="manifest" href="site.webmanifest.json"></link>
      <title>Wash Houston</title>
    </Head>
    <style jsx>{`
      :global(html, body) {
        background-color: #f8f8f8;
      }
    `}</style>
    <Initial />
  </ThemeProvider>
);

export default Home;
