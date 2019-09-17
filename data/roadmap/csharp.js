const csharp = [
	{
		name: 'CSharp',
		children: [
			{
				name: 'Testing',
				children: [
					{
						name: 'MSTest',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'NUnit' },
					{ name: 'xUnit.NET' },
				]
			},
			{
				name: 'Frameworks',
				children: [
					{ 
            name: '.NET Framework (Standard)',
            legends: {
							type: 'good',
							message: 'Good to Know'
						 }
          },
          { name: '.NET Core',
            legends: {
							type: 'good',
							message: 'Good to Know'
						}
          }
				]
			},
			{
				name: 'Package Manager',
				children: [
					{
						name: 'NuGet',
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
export default csharp;
