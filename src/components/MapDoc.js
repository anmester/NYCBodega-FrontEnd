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
            selectedBodegaObj: [],
            bodega_id: "",
            overallreview: "",
            latenight: "false",
            coffeenumber: "",
            coffeetext: "",
            catnumber: "",
            cattext: "",
            sandwichnumber: "",
            sandwichtext: "",
            hoursnumber: "",
            hourstext: "",
            beernumber: "",
            beertext: "",
            snacknumber: "",
            snacktext: ""
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/bodegas')
        .then(res => res.json())
        .then(bodegaData => this.setState({bodegas: bodegaData}))
    }

    onClickCircle = (e) => {
        document.querySelector(".map").style.marginLeft = "40%" 
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

    onNewBodegaReviewChange = (e) =>{
        let f = e.target.name
        console.log('event', e.target)
        switch(f) {
            case "latenight":
                if (e.target.value === "false" || e.target.value === false ) {
                    this.setState({latenight: "false"})
                } else {
                    this.setState({latenight: "true"})
                }
                break;
            default:
                this.setState({[e.target.name]: e.target.value})
          }
    }


    onNewBodegaReviewSubmit = (e) =>{
        e.preventDefault();
        var backendURL="http://localhost:3000"
        let reviewedBodega = this.state.bodegas.filter(bodega => bodega.id === this.state.selectedBodegaObj[0][0].id)
        let reviewedBodegaId = reviewedBodega[0].id
        console.log('user id', this.props.user)
        let newReviewCopy = {...this.state}

            newReviewCopy.user_id= this.props.user.id;          
            newReviewCopy.bodega_id= reviewedBodegaId;          
            newReviewCopy.latenight= this.state.latenight.includes("true") ? true : false;
            newReviewCopy.coffeenumber= this.state.coffeenumber ? parseInt(this.state.coffeenumber) : 0;
            newReviewCopy.catnumber= this.state.catnumber ? parseInt(this.state.catnumber) : 0;
            newReviewCopy.sandwichnumber= this.state.sandwichnumber ?  parseInt(this.state.sandwichnumber) : 0;
            newReviewCopy.hoursnumber= this.state.hoursnumber ? parseInt(this.state.hoursnumber) : 0;
            newReviewCopy.beernumber= this.state.beernumber ? parseInt(this.state.beernumber) : 0;
            newReviewCopy.snacknumber= this.state.snacknumber ? parseInt(this.state.snacknumber) : 0;

            console.log('new review copy', newReviewCopy)
        fetch(`${backendURL}/reviews`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                newReviewCopy
            })
        })
        .then( res => res.json() )
        .then( newReviewResp => {
            this.setState({
                selectedBodega: false
            })
            document.querySelector(".map").style.marginLeft = "0%" 
        })
    }

    render() {
        console.log(this.state.coffeenumber);
        
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
                        <ClickBodegaShow 
                            bodega={this.state.selectedBodegaObj} 
                            closeBodegaShow={this.closeBodegaShow} 
                           
                            onNewBodegaReviewChange={this.onNewBodegaReviewChange} 
                            onNewBodegaReviewSubmit={this.onNewBodegaReviewSubmit}
                           
                            bodega_id = {this.state.bodega_id}
                            overallreview = {this.state.overallreview}
                            latenight = {this.state.latenight}
                            coffeenumber = {this.state.coffeenumber}
                            coffeetext = {this.state.coffeetext}
                            catnumber = {this.state.catnumber}
                            cattext = {this.state.cattext}
                            sandwichnumber = {this.state.sandwichnumber}
                            sandwichtext = {this.state.sandwichtext}
                            hoursnumber = {this.state.hoursnumber}
                            hourstext = {this.state.hourstext}
                            beernumber = {this.state.beernumber}
                            beertext = {this.state.beertext}
                            snacknumber = {this.state.snacknumber}
                            snacktext = {this.state.snacktext}
                        />
                    : null}
                </div>
            </>
        )
    }
}
export default MapDoc;

