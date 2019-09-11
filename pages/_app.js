import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';

import Header from '../components/header';
import './styles.css';
import Footer from '../components/footer';

const MyApp = ({ Component, pageProps }) => {
	const [treeMode, setTreeMode] = useState(false);
	const darkMode = useDarkMode(false);

	const changeTreeMode = () => setTreeMode(!treeMode);
	return (
		<div>
			<Header
				toggleMode={darkMode.toggle}
				currentMode={darkMode}
				treeMode={treeMode}
				changeTreeMode={changeTreeMode}
			/>
			<Component {...pageProps} treeMode={treeMode} />
			<Footer />
		</div>
	);
};

export default MyApp;
