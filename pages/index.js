import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ReactGA from 'react-ga';

const Home = () => {
	React.useEffect(() => {
		ReactGA.initialize('UA-146175118-3');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className="app">
			<Head>
				<title>ShowPath.tech - Path to Learn Programming</title>
			</Head>

			<div className="hero">
				<h1 className="title">Learning Path</h1>
				<p className="description">Start from 0x01</p>

				<div className="row">
					<Link href="/roadmap/fullstack">
						<a className="card">
							<h3>Fullstack Developer </h3>
							<p>
								A full stack web developer is a person who can develop both client and server software.
							</p>
						</a>
					</Link>
					<Link href="/roadmap/machine-learning">
						<a className="card">
							<h3>Machine Learning </h3>
							<p>
								Machine learning is an application of AI that provides systems the ability to
								automatically learn and improve from experience without being explicitly programmed.
							</p>
						</a>
					</Link>
					<Link href="/roadmap/artificial-intelligence">
						<a className="card">
							<h3>Artificial intelligence </h3>
							<p>
								Artificial intelligence (AI) is the simulation of human intelligence processes by
								machines, especially computer systems.{' '}
							</p>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
