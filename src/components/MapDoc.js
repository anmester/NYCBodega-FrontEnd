import * as React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

const geojson = require('../map.json');
const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoiYW5tZXN0ZXIiLCJhIjoiY2p6ZDM3dnBxMDVpaDNub2JucnpnajBmbSJ9.VkfNt_i1wJLBsMtiYiXZtA' });
const mapStyle = {
    flex: 1,
    height: '100vh',
    width: '100vw'
};

const symbolLayout = {
    'text-field': '{place}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
};

const symbolPaint = {
    'text-color': 'white'
};

const circleLayout = { visibility: 'visible' };
const circlePaint = {
    'circle-color': 'black'
};

class MapDoc extends React.Component {
    constructor() {
        super(...arguments);
        this.center = [-73.935242, 40.730610];
        this.onClickCircle = (e) => {
            console.log(e.target);
            // to grab bodega from event, add bodega ID to the map.json data and match that id to bodega id 
        };
        this.onStyleLoad = (map) => {
            const { onStyleLoad } = this.props;
            return onStyleLoad && onStyleLoad(map);
        };
    }
    render() {
        return (
            <Map
                name='map'
                style="mapbox://styles/mapbox/streets-v9"
                center={this.center}
                containerStyle={mapStyle}
                onStyleLoad={this.onStyleLoad}
            >
                <GeoJSONLayer
                    name='location'
                    data={geojson}
                    circleLayout={circleLayout}
                    circlePaint={circlePaint}
                    circleOnClick={this.onClickCircle}
                    symbolLayout={symbolLayout}
                    symbolPaint={symbolPaint}
                />
            </Map>
        )
    }
}
export default MapDoc;

