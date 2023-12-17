import { useEffect, useRef } from 'react';
import './App.css';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

function App() {
	const mapRef = useRef(null);
	useEffect(() => {
		if (!mapRef?.current) return;
		const map = new Map({
			basemap: 'osm',
		});
		const view = new MapView({
			map,
			container: mapRef.current,
			center: [55, 25],
			zoom: 13,
		});
		return () => view && view.destroy();
	}, []);
	return <div className='viewDiv' ref={mapRef}></div>;
}

export default App;
