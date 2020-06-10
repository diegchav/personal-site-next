import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconLinkStyled from './IconLinkStyled';

const IconLink = ({ url, icon, iconWidth}) => (
    <IconLinkStyled href={url} target="_blank">
        <FontAwesomeIcon icon={['fab', icon]} width={iconWidth} />
    </IconLinkStyled>
);

IconLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconWidth: PropTypes.number
};

IconLink.defaultProps = {
    iconWidth: 32
};

export default IconLink;