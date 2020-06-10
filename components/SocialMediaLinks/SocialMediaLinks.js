import React from 'react';

import IconLink from '../IconLink/IconLink';

import SocialMediaLinksStyled from './SocialMediaLinksStyled';

const SocialMediaLinks = () => (
    <SocialMediaLinksStyled>
        <IconLink url='https://github.com/diegchav' icon='github' />
        <IconLink url='https://www.linkedin.com/in/diegchav' icon='linkedin' />
    </SocialMediaLinksStyled>
);

export default SocialMediaLinks;