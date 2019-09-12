import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ReactGA from 'react-ga';

import Details from '../../components/details';
import RoadMap from '../../data/roadmap';
import NotFound from '../../components/notFound';
import ReactTooltip from 'react-tooltip';
import { downloadImage } from './util';

const Tree = dynamic(() => import('react-d3-tree'), {
	ssr: false
});

const NodeLabel = ({ className, nodeData, setDetails }) => {
	const { name, legends } = nodeData;
	className = nodeData._children ? className + '-node' : className + '-leaf';

	const [imgSource, setImageSource] = useState(`/static/icons/${name.toLowerCase()}.svg`);

	const message = legends && legends.message;

	return (
		<div data-tip={message} onClick={() => setDetails(name)} className={`nodeNameBase show-link ${className}`}>
			<ReactTooltip place="bottom" type="dark" effect="solid" />
			<img
				width="15px"
				height="15px"
				src={imgSource}
				onError={() => {
					setImageSource(`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`);
				}}
			/>
			{legends && <a className={`legends ${legends.type}`}></a>} {name}
		</div>
	);
};

const ShowRoadMap = ({ treeMode }) => {
	const [details, setDetails] = useState(null);
	React.useEffect(() => {
		ReactGA.initialize('UA-146175118-3');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	const capture = useRef();

	const router = useRouter();
	const { type } = router.query;

	const treeData = RoadMap[type];
	const orientation = treeMode ? 'vertical' : 'horizontal';
	const name = type && type.charAt(0).toUpperCase() + type.slice(1);
	const exportPic = async () => downloadImage(capture.current);

	// if (!RoadMap[type]) {
	// 	return <NotFound />;
	// }
	const svgSquare = {
		shape: 'circle',
		shapeProps: {
			r: 10
		}
	};
	return (
		<div className="tree-page">
			<Head>
				<title>ShowPath.tech - {name} Path</title>
			</Head>

			<div className="show-flow" ref={capture}>
				<Tree
					initialDepth={1}
					data={treeData}
					allowForeignObjects
					nodeLabelComponent={{
						render: <NodeLabel setDetails={setDetails} className="myLabelComponentInSvg" />,
						foreignObjectWrapper: {
							y: 24
						}
					}}
					translate={{ x: 250, y: 350 }}
					nodeSvgShape={svgSquare}
					orientation={orientation}
					onClick={(nodeData, evt) => {
						// setDetails(nodeData.name);
					}}
				/>
			</div>

			{details && <Details name={details} closePreview={() => setDetails(null)} />}
		</div>
	);
};

export default ShowRoadMap;
