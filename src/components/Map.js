import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import ReactMapGL from 'react-map-gl';

export default class Map extends React.Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL mapboxApiAccessToken='pk.eyJ1IjoiYW5tZXN0ZXIiLCJhIjoiY2p6ZDM3dnBxMDVpaDNub2JucnpnajBmbSJ9.VkfNt_i1wJLBsMtiYiXZtA'
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}