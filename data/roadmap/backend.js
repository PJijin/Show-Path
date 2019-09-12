import nodejs from './nodejs';
import python from './python';
import php from './php';
import ruby from './ruby';

const backend = [
	{
		name: 'Back-End',
		children: [
			php[0],
			python[0],
			nodejs[0],
			ruby[0],
			{
				name: 'Go'
			},
			{
				name: 'CSharp'
			},
			{
				name: 'Java (Grails, Spring, Play)'
			}
		]
	}
];
export default backend;
