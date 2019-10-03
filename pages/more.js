import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { AlignJustify } from 'react-feather';

const roadMaps = [
	'Android',
	'Angular',
	'Artificial Intelligence',
	'Augmented Reality',
	'Back-end',
	'CSS',
	'CSharp',
	'Devops',
	'Desktop',
	'Elixir',
	'Front-end',
	'Fullstack',
	'Go',
	'Html',
	'iOS',
	'Javascript',
	'Machine Learning',
	'Mobile',
	'Nodejs',
	'PHP',
	'Python',
	'React',
	'Ruby',
	'Vue',
	'Virtual Reality',
	'Web Scraping'
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
			<ul className="more-list">
				{roadMaps.map(item => {
					const type = item.replace(/\s+/g, '-').toLowerCase();
					return (
						<li key={item}>
							<Link href="/roadmap/[type]" as={`/roadmap/${type}`}>
								<a>
									<img
										width="15px"
										height="15px"
										src={`/static/icons/${type.toLowerCase()}.svg`}
										onError={() => {
											// setImageSource(
											// 	`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`
											// );
										}}
									/>
									{item}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
