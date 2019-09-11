const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withCSS(
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
);
