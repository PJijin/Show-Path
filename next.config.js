const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withMDX = require('@next/mdx')({
	extension: /\.(md|mdx)$/
});
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx']
});

module.exports = withCSS(
	withMDX(
		withSass({
			webpack(config, { dev }) {
				if (config.mode === 'production') {
					if (Array.isArray(config.optimization.minimizer)) {
						config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
					}
				}

				return config;
			}
		})
	)
);
