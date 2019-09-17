import React from 'react';
import GitHubButton from 'react-github-button';

import { GitHub } from 'react-feather';

export default function Footer() {
	return (
		<footer>
			<div>
				<a target="_BLANK" rel="noreferrer noopener" href="https://github.com/PJijin/Show-Path">
					<GitHubButton type="stargazers" namespace="pjijin" repo="Show-Path" />
				</a>
			</div>
			<div className="social-links">
				Made with <img src="/static/icons/heart.svg" width="18px" /> by
				<a target="_BLANK" rel="noreferrer noopener" href="https://twitter.com/JP1016v1">
					@JP1016v1
				</a>
				&
				<a target="_BLANK" rel="noreferrer noopener" href="https://twitter.com/pJijin">
					@Pjijin
				</a>
			</div>
		</footer>
	);
}
