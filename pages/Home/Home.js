import React from 'react'

import About from '../../components/About/About';
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks';

import HomeStyled from './HomeStyled';

const Home = () => (
    <HomeStyled>
        <About />
        <SocialMediaLinks />
    </HomeStyled>
);

export default Home