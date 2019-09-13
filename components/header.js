import React from 'react';
import { Facebook, Twitter, Sun, Moon, GitMerge, Voicemail, MoreHorizontal } from 'react-feather';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';

const mainMenu = [
	{
		path: 'fullstack',
		text: 'Fullstack'
	},
	{
		path: 'mobile',
		text: 'Mobile Apps'
	},
	{
		path: 'desktop',
		text: 'Software'
	}
];

export default function Header({ toggleMode, currentMode: { value }, treeMode, changeTreeMode }) {
	if (value) console.log('dark icon');
	return (
		<header>
			<Link href="/" as="/">
				<a className="logo">
					<img src="/static/timeline.svg" className={value ? 'img-light' : ''} />
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
					<a data-tip="View More">
						<MoreHorizontal />
					</a>
				</Link>
			</div>
			<div className="options">
				<button data-tip="Change Mode" onClick={toggleMode}>
					{value ? <Sun size="14" /> : <Moon size="14" />}
				</button>

				<button data-tip="Change Tree Layout" onClick={() => changeTreeMode()}>
					{treeMode ? <GitMerge size="14" /> : <Voicemail size="14" />}
				</button>
				<a
					data-tip="Share to Facebook"
					target="_BLANK"
					rel="noreferrer noopener"
					href="https://www.facebook.com/sharer/sharer.php?u=https://showpath.tech"
				>
					<Facebook size="14" />
				</a>
				<a
					data-tip="Share to Twitter"
					target="_BLANK"
					rel="noreferrer noopener"
					href="https://twitter.com/intent/tweet?url=showpath.tech&text=ShowPath.tech - Path to Learn Programming&ref_src=twsrc%5Etfw"
				>
					<Twitter size="14" />
				</a>
			</div>
			<ReactTooltip place="bottom" type="dark" effect="solid" />
		</header>
	);
}
