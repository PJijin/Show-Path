import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { AlignJustify } from 'react-feather';

const roadMaps = [
	'Front End',
	'Back End',
	'Fullstack',
	'Devops',
	'Machine Learning',
	'Artificial Intelligence',
	'Augmented Reality',
	'Virtual Reality',
	'PHP',
	'NodeJs',
	'Python',
	'Go',
	'Android',
	'ReactJs',
	'Angular',
	'Vue',
	'CSS',
	'HTML',
	'Javascript',
	'iOS'
];

export default function MoreRoadMap() {
	return (
		<div className="app more-page">
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
			<h4 className="flex page-heading">
				<AlignJustify />
				<span>Select Category</span>
			</h4>
			<ul>
				{roadMaps.map(item => {
					const type = item.replace(/\s+/g, '-').toLowerCase();
					return (
						<li key={item}>
							<Link href="/roadmap/[type]" as={`/roadmap/${type}`}>
								<a>{item}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
