import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';

import IconLinkStyled from './IconLinkStyled';

const IconLink = ({ url, icon, iconWidth}) => {
    const { iconColor } = useContext(ThemeContext);
    return (
        <IconLinkStyled href={url} target="_blank" color={iconColor}>
            <FontAwesomeIcon icon={['fab', icon]} width={iconWidth} />
        </IconLinkStyled>
    );
};

IconLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconWidth: PropTypes.number,
    color: PropTypes.string
};

IconLink.defaultProps = {
    iconWidth: 32,
    color: '#000'
};

export default IconLink;