import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import ReviewInfoCard from './ReviewInfoCard.js';




export default class BodegaInfoCard extends React.Component{

    renderReviewInfoCards = () => {
            // make a review info card for each reviewinfo
        let reviewsArray = this.props.filteredReviews.map(review  => {
            console.log('this.props.searchTerm', this.props.searchTerm )
            return(
                <div>
                    <ReviewInfoCard 
                        bodega={this.props.bodega} 
                        bodegaAvgRating={this.props.bodegaAvgRating} 
                        filteredReviews= {this.props.filteredReviews} 
                        searchTerm = {this.props.searchTerm} 
                    />
                    {/* <h3>Reviews for: {this.props.searchTerm.charAt(0).toUpperCase() }</h3>   DELETES  REST OF WORD*/}
                    <h3>Reviews for: {this.props.searchTerm }</h3>

                </div>
            )   
        } )
        return reviewsArray
    }



        render() {
            console.log("PROPS!" , this.props.filteredReviews)

            let reviewsArray = this.renderReviewInfoCards()
            console.log("reviewsArrray : ", reviewsArray)

            return(
                <div className='bodega-show'>
                    <h4> in Bodega Info Card </h4>

                    {reviewsArray}
                    {/* Have Levels:   BodegaInfoCard   ReviewInfoCard   ReviewCategoryCard */}
                </div>
            )
        }


}

