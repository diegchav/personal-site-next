import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import AboutStyled from './AboutStyled';

const About = () => {
    const { fontColor } = useContext(ThemeContext);

    return (
        <AboutStyled fontColor={fontColor}>
            <h1 className="name">Diego Chávez</h1>
            <hr />
            <h2 className="role">Software Engineer</h2>
        </AboutStyled>
    );
};

export default About;