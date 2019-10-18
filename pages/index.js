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
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@pjijin" />
				<meta property="og:url" content="https://showpath.tech/" />
				<meta property="og:title" content="Path to Learn Programming" />
				<meta property="og:description" content="Start from 0x01." />
				<meta property="og:image" content="https://showpath.tech/static/cover.png" />

				<meta property="og:title" content="ShowPath.Tech - Path to Learn Programming" />
				<meta property="og:type" content="internet" />
				<meta property="og:url" content="https://showpath.tech/" />
				<meta property="og:image" content="https://showpath.tech/static/cover.png" />
			</Head>

			<div className="hero">
				<h1 className="title">Compare and Learn</h1>
				<p className="description">Learn the basics quickly</p>

				<div className="tiles">
					<div className="row">
						<Link href="/compare/[lang]?compare=go" as="/compare/javascript?compare=go">
							<a className="card">
								<h3 className="compare-heading">
									<img src={`/static/icons/javascript.svg`} width="25px" height="25px" /> Javascript /
									Go <img src={`/static/icons/go.svg`} width="25px" height="25px" />
								</h3>
								<p>Compare and learn Javascript / Go</p>
							</a>
						</Link>
					</div>
				</div>
			</div>

			<div className="hero">
				<h1 className="title">Learning Path</h1>
				<p className="description">Start from 0x01</p>

				<div className="tiles">
					<div className="row">
						<Link href="/roadmap/[type]" as="/roadmap/fullstack">
							<a className="card">
								<h3>Fullstack Developer </h3>
								<p>
									A full stack web developer is a person who can develop both client and server
									software.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/machine-learning">
							<a className="card">
								<h3>Machine Learning </h3>
								<p>
									Machine learning is an application of AI that provides systems the ability to
									automatically learn and improve from experience without being explicitly programmed.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/artificial-intelligence">
							<a className="card">
								<h3>Artificial intelligence </h3>
								<p>
									Artificial intelligence (AI) is the simulation of human intelligence processes by
									machines, especially computer systems.
								</p>
							</a>
						</Link>
					</div>
					<div className="row">
						<Link href="/roadmap/[type]" as="/roadmap/augmented-reality">
							<a className="card">
								<h3>Augmented Reality</h3>
								<p>
									Augmented reality (AR) is a type of interactive, reality-based display environment that takes the capabilities of computer generated display, sound, text and effects to enhance the user's real-world experience.
									It combines real and computer-based scenes and images to deliver a unified but enhanced view of the world.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/virtual-reality">
							<a className="card">
								<h3>Virtual Reality</h3>
								<p>
									Virtual Reality (VR) is the use of computer technology to create a simulated
									environment. Unlike traditional user interfaces, VR places the user inside an
									experience.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/mobile">
							<a className="card">
								<h3>Mobile Apps</h3>
								<p>
									A mobile application is a computer program or software application designed to run
									on a mobile device such as a phone, tablet, or watch.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/web-scraping">
							<a className="card">
								<h3>Web Scraping</h3>
								<p>
									Web Scraping is a technique employed to extract large amounts of data from websites
									whereby the data is extracted and saved to a local file or to a database.
								</p>
							</a>
						</Link>
					</div>
					<div className="row">
						<Link href="/roadmap/[type]" as="/roadmap/game-developer">
							<a className="card">
								<h3>Game Developer</h3>
								<p>
									Game development is the process of making a video game.
									You take an idea or a concept for a game, and you develop, program, engineer, render, record, mix, produce, test, etc. until you have a full-fledged game.
								</p>
							</a>
						</Link>
					</div>
				</div>
			</div>
			{/* <div className="row">Contribute to the opensource source project.</div> */}
		</div>
	);
};

export default Home;
