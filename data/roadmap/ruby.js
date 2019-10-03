const ruby = [
	{
		name: 'Ruby',
		children: [
			{
				name: 'Testing',
				children: [
					{
						name: 'RSpec',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					}
				]
			},
			{
				name: 'Frameworks',
				children: [
					{
						name: 'Ruby on Rails',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'Sinatra' },
					{ name: 'Padrino' },
					{ name: 'Ramaze' }
				]
			},
			{
				name: 'Package Manager',
				children: [
					{
						name: 'RubyGems',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					}
				]
			},
			{
				name: 'Debugging',
				children: [{ name: 'Byebug' },{ name: 'pry' }]
			}
		]
	}
];
export default ruby;
