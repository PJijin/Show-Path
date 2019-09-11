import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import ReactGA from 'react-ga';

import Header from '../components/header';
import './styles.css';
import Footer from '../components/footer';

const MyApp = ({ Component, pageProps }) => {
	const [treeMode, setTreeMode] = useState(false);
	const darkMode = useDarkMode(false);

	React.useEffect(() => {
		ReactGA.initialize('UA-146175118-3');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

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
