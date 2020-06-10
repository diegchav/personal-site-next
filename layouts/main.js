import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
`;

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />

    <Head>
      <title>Diego Chávez | Software Engineer</title>
      <meta charSet="UTF-8" />
      <link rel='icon' href='/static/favicon.ico' importance='low' />
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>

    {children}
  </>
);

export default MainLayout;
