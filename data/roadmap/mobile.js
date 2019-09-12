import android from './android';
import ios from './ios';

const mobile = [
	{
		name: 'Mobile',
		children: [
			android[0],
			ios[0],
			{
				name: 'Windows',
				children: [{ name: 'CSharp' }]
			}
		]
	}
];
export default mobile;
