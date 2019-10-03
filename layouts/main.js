import React from 'react'
import Head from 'next/head'

const MainLayout = ({ children }) => (
  <div>
    <Head>
      <title>Diego Chávez | FullStack Web Developer</title>
      <meta charSet="UTF-8" />
      <link rel='icon' href='/static/favicon.ico' importance='low' />
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>

    {children}

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Rotobo, sans-serif;
        box-sizing: border-box;
      }

      a:link, a:visited {
        text-decoration: none;
        color: inherit;
      }
    `}</style>
  </div>
);

export default MainLayout;