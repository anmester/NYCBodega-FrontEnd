import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import CategoryReviewCard from './CategoryReviewCard.js';



export default class ReviewInfoCard extends React.Component{

    categoryReviewCards = () => {
        // make a review info card for each reviewinfo
    let categoryReviewsArray = this.props.filteredReviews.map(review  => {
        console.log("review....." , review)
        return(
            <div>
                <CategoryReviewCard 
                    bodega={this.props.bodega} 
                    bodegaAvgRating={this.props.bodegaAvgRating} 
                    filteredReviews= {this.props.filteredReviews} 
                    searchTerm = {this.props.searchTerm} 
                />
                {/* <h3>Reviews for: {this.props.searchTerm.charAt(0).toUpperCase() }</h3>   DELETES  REST OF WORD*/}
                {/* Because ALL search returns an Object, single category returns array */}
                <h3>Review Date: {review["created_at"] ? review["created_at"] : review[3]  }</h3>
                <h3>Rate: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "number"] : review[1]  }</h3>
                <h3>Details: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "text"] : review[0]  }</h3>

            </div>
        )   
        } )
    return categoryReviewsArray
    }




    render() {
        console.log("Props in REVIEW CARD:", this.props.searchTerm)
        // ADD USER INFO TO REVIEW DATA?  WOULD HAVE TO QUERY BY USER ID! 
        let reviewData = this.categoryReviewCards()

                // <ReviewInfoCard 
                // bodega={this.props.bodega} 
                // bodegaAvgRating={this.props.bodegaAvgRating} 
                // filteredReviews= {this.props.filteredReviews} 
                // searchTerm = {this.props.searchTerm} 
                // />

        //map props.crazy bodegas array 

        return(
            <div className='bodega-show'>
                <h3> Review Info Card </h3>
                {reviewData}
                {/* Have Levels:   BodegaInfoCard   ReviewInfoCard   ReviewCategoryCard */}

            </div>
        )
    }
}