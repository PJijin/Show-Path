import angular from './angular';
import reactjs from './reactjs';
import vue from './vue';
const javascript = [
	{
		name: 'Javascript',
		children: [
			{
				name: 'Package Manager',
				legends: {
					type: 'any',
					message: 'Learn any'
				},
				children: [
					{
						name: 'NPM'
					},
					{
						name: 'Yarn'
					}
				]
			},
			{
				name: 'Task Runners',
				children: [
					{
						name: 'npm scripts'
					},
					{
						name: 'Gulp'
					},
					{
						name: 'Grunt'
					}
				]
			},
			{
				name: 'Framework',
				children: [
					angular[0],
					reactjs[0],
					vue[0],
					{
						name: 'Svelte'
					},
					{
						name: 'Preact'
					},
					{
						name: 'EmberJs'
					}
				]
			},
			{
				name: 'Testing',
				children: [
					{
						name: 'Unit Testing',
						children: [
							{
								name: 'Jest'
							},
							{
								name: 'Enzyme'
							},
							{
								name: 'Sinon'
							},
							{
								name: 'Mocha'
							},
							{
								name: 'Chai'
							},
							{
								name: 'Ava'
							},
							{
								name: 'Tape'
							}
						]
					},
					{
						name: 'Integration Testing',
						children: [
							{
								name: 'Karma'
							}
						]
					},
					{
						name: 'E2E Testing',
						children: [
							{
								name: 'Selenium'
							},
							{
								name: 'Cypress'
							},
							{
								name: 'Puppeteer'
							},
							{
								name: 'Cucumber.js'
							},
							{
								name: 'Nightwatch.js'
							}
						]
					}
				]
			}
		]
	}
];
export default javascript;
