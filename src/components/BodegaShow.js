import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

export default class BodegaShow extends React.Component{
    
    addReview = e => {
        console.log('add review clicked,', e.target)
    }
    
    render() {
        return(
            <div className='bodega-show'>
                <h3>Inside Bodega Show</h3>
                <p>Name: {this.props.bodegaName}</p>
                <button onClick={this.props.closeBodegaShow}>Close Bodega</button>
                <button onClick={this.addReview}>Add Review</button>
            </div>
        )
    }
}