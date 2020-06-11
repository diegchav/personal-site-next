import { useState } from 'react';

import {
    themeLight,
    themeDark,
} from '../themes';

const useToggleTheme = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [theme, setTheme] = useState(themeLight);

    const toggleTheme = () => {
        if (isToggled) {
            setTheme(themeLight);
        } else {
            setTheme(themeDark);
        }
        setIsToggled(!isToggled);
    };

    return [isToggled, toggleTheme, theme];
};

export default useToggleTheme;