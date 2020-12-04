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
      <title>Wash Houston</title>
    </Head>
    <div>
      <Initial />

      <style jsx>{`
        :global(html, body) {
          background-color: #f8f8f8;
        }
      `}</style>
    </div>
  </>
);

export default Home;
