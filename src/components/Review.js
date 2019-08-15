import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

export default class Review extends React.Component{
    render() {
        return(
            <div className='review-card'>
                <h2>Inside Review</h2>
                <p>{this.props.review.beernumber}</p>
            </div>
        )
    }
}