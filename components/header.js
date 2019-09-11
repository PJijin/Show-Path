import React from 'react';
import { Map, Sun, Moon, GitMerge, Voicemail, MoreHorizontal } from 'react-feather';
import Link from 'next/link';

export default function Header({ toggleMode, currentMode: { value }, treeMode, changeTreeMode }) {
	return (
		<header>
			<Link href="/" as="/">
				<a className="logo">
					<Map></Map>
					ShowPath.tech
				</a>
			</Link>
			<div className="menu">
				<Link href="/roadmap/?type=fullstack" as="/roadmap/fullstack">
					<a>Web</a>
				</Link>
				<Link href="/roadmap/?type=mobile" as="/roadmap/mobile">
					<a>Mobile</a>
				</Link>
				<Link href="/roadmap/?type=desktop" as="/roadmap/desktop">
					<a>Software</a>
				</Link>
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
