import React from 'react'

import Home from './Home/Home';

import MainLayout from '../layouts/main';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

const App = () => (
    <MainLayout>
      <Home />
    </MainLayout>
);

export default App;