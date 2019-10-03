import React from 'react';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import selectLang from '../../data/learn/index';
import CodeBlock from '../../components//CodeBlock';

export default function Lang() {
	const router = useRouter();
	const { lang, compare } = router.query;

	const components = {
		pre: props => <div {...props} />,
		code: CodeBlock
	};

	if (lang && compare) {
		return (
			<div className="lang-section">
				<MDXProvider components={components}>
					<div>
						<h1 className="center">{lang}</h1>
						{selectLang(lang)}
					</div>
					<div>
						<h1 className="center">{compare}</h1>
						{selectLang(compare)}
					</div>
				</MDXProvider>
			</div>
		);
	}

	return null;
}
