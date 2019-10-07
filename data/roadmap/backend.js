import nodejs from './nodejs';
import python from './python';
import php from './php';
import ruby from './ruby';
import csharp from './csharp';
import elixir from './elixir';
import go from './go';

const backend = [
	{
		name: 'Back-End',
		children: [
			php[0],
			python[0],
			nodejs[0],
			ruby[0],
			csharp[0],
			elixir[0],
			go[0],
			{
				name: 'Java (Grails, Spring, Play)'
			}
		]
	}
];
export default backend;
