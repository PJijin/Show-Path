import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import ReactGA from 'react-ga';
import Head from 'next/head';

import Header from '../components/header';
import './styles.css';
import Footer from '../components/footer';

const MyApp = ({ Component, pageProps }) => {
	const [treeMode, setTreeMode] = useState(false);
	const [viewMode, setViewMode] = useState(true);
	const darkMode = useDarkMode(false);

	React.useEffect(() => {
		ReactGA.initialize('UA-146175118-3');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const changeTreeMode = () => setTreeMode(!treeMode);
	const changeViewMode = () => setViewMode(!viewMode);

	return (
		<div>
			<Head>
				<link rel="icon" href="/static/favicon.ico" sizes="16x16" />
			</Head>
			<Header
				toggleMode={darkMode.toggle}
				currentMode={darkMode}
				treeMode={treeMode}
				changeTreeMode={changeTreeMode}
				viewMode={viewMode}
				changeView={changeViewMode}
			/>
			<Component {...pageProps} treeMode={treeMode} viewMode={viewMode} />
			<Footer />
		</div>
	);
};

export default MyApp;
