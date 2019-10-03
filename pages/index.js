import React from 'react'

import MainLayout from '../layouts/main';

import Me from '../components/me';
import Links from '../components/links';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

const Home = () => (
  <div className="home">
    <MainLayout>
      <Me />
      <Links />
    </MainLayout>

    <style jsx>{`
      .home {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default Home
