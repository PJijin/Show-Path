import React from 'react';
import { Map, Sun, Moon, GitMerge, Voicemail, MoreHorizontal } from 'react-feather';
import Link from 'next/link';

const mainMenu = [
	{
		path: 'fullstack',
		text: 'Web'
	},
	{
		path: 'mobile',
		text: 'Mobile'
	},
	{
		path: 'desktop',
		text: 'Software'
	}
];

export default function Header({ toggleMode, currentMode: { value }, treeMode, changeTreeMode }) {
	return (
		<header>
			<Link href="/" as="/">
				<a className="logo">
					<img src="/static/timeline.svg" className={value && 'img-light'} />
					ShowPath.tech
				</a>
			</Link>
			<div className="menu">
				{mainMenu.map(menu => {
					const type = menu.path;
					return (
						<Link key={menu.path} href="/roadmap/[type]" as={`/roadmap/${type}`}>
							<a>{menu.text}</a>
						</Link>
					);
				})}
				<Link href="/more" as="/more">
					<a>
						<MoreHorizontal />
					</a>
				</Link>
			</div>
			<div className="options">
				<button onClick={toggleMode}> {value ? <Sun size="14" /> : <Moon size="14" />}</button>

				<button onClick={() => changeTreeMode()}>
					{treeMode ? <GitMerge size="14" /> : <Voicemail size="14" />}
				</button>
			</div>
		</header>
	);
}
