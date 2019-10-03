const css = [
	{
		name: 'CSS',
		legends: {
			type: 'good',
			message: 'Good to Know'
		},
		children: [
			{
				name: 'CSS Architecture',
				children: [
					{
						name: 'BEM',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'OOCSS' },
					{ name: 'SMACSS' }
				]
			},
			{
				name: 'CSS Frameworks',
				legends: {
					type: 'any',
					message: 'Learn any'
				},
				children: [
					{
						name: 'Bootstrap',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'Material' },
					{ name: 'Bulma' },
					{ name: 'Semantic UI' },
					{
						name: 'Foundation',
						legends: {
							type: 'possibility',
							message: 'Possibilities'
						}
					},
                                        { name: 'Tailwindcss',
					legends: {
							type: 'possibility',
							message: 'Possibilities'
						}
					}

				]
			},
			{
				name: 'CSS Pre-processors',
				children: [
					{
						name: 'SASS',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{
						name: 'Less',
						legends: {
							type: 'possibility',
							message: 'Possibilities'
						}
					},
					{
						name: 'Stylus',
						legends: {
							type: 'possibility',
							message: 'Possibilities'
						}
					},
					{
						name: 'PostCSS',
						legends: {
							type: 'possibility',
							message: 'Possibilities'
						}
					}
				]
			},
			{
				name: 'Responsive Design',
				legends: {
					type: 'good',
					message: 'Good to Know'
				}
			}
		]
	}
];
export default css;
