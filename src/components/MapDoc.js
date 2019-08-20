import * as React from 'react';
import ReactMapboxGl, { GeoJSONLayer, Popup } from "react-mapbox-gl";
import BodegaShow from './BodegaShow.js';

const geojson = require('../map.json');

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoiYW5tZXN0ZXIiLCJhIjoiY2p6ZDM3dnBxMDVpaDNub2JucnpnajBmbSJ9.VkfNt_i1wJLBsMtiYiXZtA' });

const mapStyle = {
    flex: 1,
    height: '100vh',
    width: '100vw'
};

const circleLayout = { 
    visibility: 'visible' };

const circlePaint = {
    'circle-color': 'black'
};

class MapDoc extends React.Component {
    constructor() {
        super(...arguments);
        this.center = [-73.935242, 40.730610];

        this.onStyleLoad = (map) => {
            const { onStyleLoad } = this.props;
            return onStyleLoad && onStyleLoad(map);
        };

        this.state = {
            selectedBodega: false, 
            selectedBodegaName: '',
            lat: '',
            long: '', 
        }
    }

    onClickCircle = (e) => {
        document.querySelector(".map").style.marginLeft = "15%"
        console.log(e.features[0].geometry);   // this gives us the name of each bodega
        let name = e.features[0].properties.name
        let lat = e.features[0].geometry.coordinates[0]
        let long = e.features[0].geometry.coordinates[1]
        this.setState({selectedBodega: true, selectedBodegaName: name, lat: lat, long: long})
        this.setBodegaCSS()
    };

    setBodegaCSS() {
        const bodega = document.querySelector(".bodega-show");
        bodega.style.position = "absolute"
        bodega.style.width = "100%"
        bodega.style.marginTop = "-50.67em"
    }

    removeBodegaCSS() {
        const bodega = document.querySelector(".bodega-show");
        bodega.style.position = ""
        bodega.style.width = "0%"
        bodega.style.marginTop = "0"
        document.querySelector(".map").style.marginLeft = "0%"
    }

    closeBodegaShow = () => {
        this.setState({
            selectedBodega: false
        })
        this.removeBodegaCSS()
    }

    render() {
        return (
                <>
                    <div className='map-container'>
                        <Map
                            name='map'
                            style="mapbox://styles/mapbox/streets-v9"
                            center={this.center}
                            containerStyle={mapStyle}
                            onStyleLoad={this.onStyleLoad}
                            className = "map"
                        >
                            <GeoJSONLayer
                                name='location'
                                data={geojson}
                                circleLayout={circleLayout}
                                circlePaint={circlePaint}
                                circleOnClick={(e) => this.onClickCircle(e)}
                            />
                        </Map>

                        {this.state.selectedBodega ?
                            <BodegaShow bodegaName={this.state.selectedBodegaName} closeBodegaShow={this.closeBodegaShow} />
                        : null}
                    </div>
                </>
        )
    }
}
export default MapDoc;

