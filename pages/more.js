import React from 'react';
import Link from 'next/link';
import { AlignJustify } from 'react-feather';

const roadMaps = [
	'Front End',
	'Back End',
	'Fullstack',
	'Devops',
	'Machine Learning',
	'AI',
	'Augmented Reality',
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
			<h4 className="flex page-heading">
				<AlignJustify />
				<span>Select Category</span>
			</h4>
			<ul>
				{roadMaps.map(item => {
					const link = item.replace(/\s+/g, '-').toLowerCase();
					return (
						<li key={item}>
							<Link href={`/roadmap/${link}`}>
								<a>{item}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
