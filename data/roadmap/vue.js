const vue = [
	{
		name: 'Vue',
		children: [
			{
				name: 'State Management',
				children: [
					{ name: 'Component State' },
					{
						name: 'Vuex',
						children: [
							{
								name: 'Data persistence',
								children: [{ name: 'vuex-persist' }, { name: 'vuex-persistedstate' }]
							},
							{ name: 'vuex-shared-mutations' },
							{ name: 'vuex-loading' }
						]
					}
				]
			},
			{ name: 'Routing', children: [{ name: 'vue-router' }] },
			{ name: 'SSR', children: [{ name: 'Nuxt.Js' }] }
		]
	}
];
export default vue;
