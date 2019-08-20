import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'


export default class BodegaMapRender extends React.Component{

    render() {
        return(
            <div style={{marginLeft: 1 + 'em'}}>
                <h3 >{this.props.bodegaInfo.name} </h3>
                <p>Neighborhood: {this.props.bodegaInfo.neighborhood}</p>
                <p>Average Rating: {this.props.bodegaInfo.averagerating}</p>
                <button onClick={this.props.closeBodegaShow}>Close Bodega</button><br></br>
                <button onClick={this.props.addReview}>Add Review</button>
            </div>
        )
    }
}