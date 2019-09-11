import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ReactGA from 'react-ga';

import Details from '../../components/details';
import RoadMap from '../../data/roadmap';
import NotFound from '../../components/notFound';

const Tree = dynamic(() => import('react-d3-tree'), {
	ssr: false
});

const ShowRoadMap = ({ treeMode }) => {
	const [details, setDetails] = useState(null);
	React.useEffect(() => {
		ReactGA.initialize('UA-146175118-3');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const router = useRouter();
	const { type } = router.query;

	const treeData = RoadMap[type];
	const orientation = treeMode ? 'vertical' : 'horizontal';
	const name = type && type.charAt(0).toUpperCase() + type.slice(1);

	// if (!RoadMap[type]) {
	// 	return <NotFound />;
	// }

	return (
		<div className="app">
			<Head>
				<title>ShowPath.tech - {name} Path</title>
			</Head>
			<Tree
				data={treeData}
				translate={{ x: 250, y: 350 }}
				orientation={orientation}
				onClick={(nodeData, evt) => {
					setDetails(nodeData.name);
				}}
			/>
			{details && <Details name={details} closePreview={() => setDetails(null)} />}
		</div>
	);
};

export default ShowRoadMap;
