import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'


export default class ClickBodegaShow extends React.Component{
    
    addReview = e => {
        console.log(this.props.bodega) // we have the target bodega here to add the review to and can now add a review accordingly
    }
    

    render() {
        let bodegaInfo = this.props.bodega[0][0]
        return(
            <div className='click-bodega-show'>
                <h3>{bodegaInfo.name}</h3>
                <p>Neighborhood: {bodegaInfo.neighborhood}</p>
                <p>Average Rating: {bodegaInfo.averagerating}</p>
                <button onClick={this.props.closeBodegaShow}>Close Bodega</button><br></br>
                <button onClick={this.addReview}>Add Review</button>
            </div>
        )
    }
}