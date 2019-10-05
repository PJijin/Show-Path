import javascript from './javascript';

const nodejs = [
	{
		name: 'NodeJS',
		children: [
			{ name: 'Testing', children: javascript[0].children[4].children },
			{
				name: 'Frameworks',
				children: [
					{
						name: 'Express',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'Loopback' },
					{ name: 'Hapi' },
					{ name: 'Koa' },
					{ name: 'Sails.js' }
				]
			},
			javascript[0].children[0]
		]
	}
];
export default nodejs;
