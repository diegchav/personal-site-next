import React from 'react';
import { ThemeProvider } from 'styled-components';

import Toggle from '../components/Toggle/Toggle';
import Home from './Home/Home';

import MainLayout from '../layouts/main';

import useToggleTheme from '../hooks/use-toggle-theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

const App = () => {
	const [isToggled, toggleTheme, theme] = useToggleTheme();

	return (
		<ThemeProvider theme={theme}>
			<MainLayout>
				<Toggle isToggled={isToggled} onToggle={toggleTheme} />
				<Home />
			</MainLayout>
		</ThemeProvider>
	);
};

export default App;