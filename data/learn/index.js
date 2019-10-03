import Javascript from './javascript.mdx';
import Go from './go.mdx';

const selectLang = langName => {
	switch (langName) {
		case 'javascript':
			return <Javascript />;
		case 'go':
			return <Go />;
		default:
			return null;
	}
};

export default selectLang;
