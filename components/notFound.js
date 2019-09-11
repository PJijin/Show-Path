import React from 'react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="error">
			<img src="/static/error.svg" alt="error" />
			<div>
				<h3>RoadMap not found</h3>
				<p>
					<Link href="/" as="/">
						<a>Go to Home</a>
					</Link>
				</p>
			</div>
		</div>
	);
}
