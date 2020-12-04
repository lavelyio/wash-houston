import React from "react";
import Head from "next/head";
import Initial from "../components/initial";

const Home = () => (
  <>
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
  </>
);

export default Home;
