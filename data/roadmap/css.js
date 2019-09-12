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
				children: [{ name: 'BEM' }, { name: 'OOCSS' }, { name: 'SMACSS' }]
			},
			{
				name: 'CSS Frameworks',
				legends: {
					type: 'any',
					message: 'Learn any'
				},
				children: [{ name: 'Bootstrap' }, { name: 'Material' }, { name: 'Bulma' }, { name: 'Semantic UI' }]
			},
			{
				name: 'CSS Pre-processors',
				children: [{ name: 'SASS' }, { name: 'PostCSS' }, { name: 'SCSS' }]
			},
			{
				name: 'Responsive Design'
			}
		]
	}
];
export default css;
