import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import ToggleStyled from './ToggleStyled';

const Toggle = ({ isToggled, onToggle }) => {
    const { toggleBackgroundColor, toggleForegroundColor } = useContext(ThemeContext);;

    return (
        <ToggleStyled
            backgroundColor={toggleBackgroundColor}
            foregroundColor={toggleForegroundColor}
            isToggled={isToggled}
            onClick={onToggle}
        >
            <div className="circle"></div>
        </ToggleStyled>
    );
};

Toggle.propTypes = {
    isToggled: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
};

Toggle.defaultProps = {
    isToggled: false
};

export default Toggle;