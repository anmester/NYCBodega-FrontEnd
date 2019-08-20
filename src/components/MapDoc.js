import * as React from 'react';
import ReactMapboxGl, { GeoJSONLayer, Popup } from "react-mapbox-gl";
import ClickBodegaShow from './ClickBodegaShow.js';

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
            bodegas: [],
            selectedBodega: false, 
            selectedBodegaObj: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/bodegas')
        .then(res => res.json())
        .then(bodegaData => this.setState({bodegas: bodegaData}))
    }

    onClickCircle = (e) => {
        document.querySelector(".map").style.marginLeft = "15%" 
        let name = e.features[0].properties.name 
        this.setState({
            selectedBodega: true, 
            selectedBodegaObj: [this.state.bodegas.filter(bodega => bodega.name === name)]
        })
        this.setBodegaCSS()
    };

    setBodegaCSS() {
        const bodega = document.querySelector(".click-bodega-show");
        bodega.style.position = "absolute"
        bodega.style.width = "100%"
        bodega.style.marginTop = "-50.67em"
    }

    removeBodegaCSS() {
        const bodega = document.querySelector(".click-bodega-show");
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
                        <ClickBodegaShow bodega={this.state.selectedBodegaObj} closeBodegaShow={this.closeBodegaShow} />
                    : null}
                </div>
            </>
        )
    }
}
export default MapDoc;

