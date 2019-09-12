const python = [
	{
		name: 'Python',
		children: [
			{
				name: 'Testing',
				children: [
					{
						name: 'Unittest/ pyunit',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'py.test' },
					{ name: 'doctets' },
					{ name: 'nose' },
					{ name: 'tox' }
				]
			},
			{
				name: 'Frameworks',
				children: [
					{
						name: 'Sync',
						children: [
							{ name: 'Flask' },
							{
								name: 'Django',
								legends: {
									type: 'good',
									message: 'Good to Know'
								}
							},
							{ name: 'Pyramid' }
						]
					},
					{
						name: 'Async',
						children: [
							{ name: 'Sanic' },
							{ name: 'Tornado' },
							{ name: 'gevent' },
							{
								name: 'aiohttp',
								legends: {
									type: 'good',
									message: 'Good to Know'
								}
							}
						]
					}
				]
			},
			{
				name: 'Package Manager',
				children: [
					{
						name: 'pip',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					}
				]
			}
		]
	}
];
export default python;
