import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import ReviewInfoCard from './ReviewInfoCard.js';
import  '../SearchReviews.css';
import { relative } from 'path';




export default class BodegaInfoCard extends React.Component{

    renderReviewInfoCards = () => {
            // make a review info card for each reviewinfo


        let reviewsArray = this.props.filteredReviews.map(review  => {
            // console.log('this.props.searchTerm', this.props.searchTerm )  // CORREECT, is ALL 
            console.log("review in BodegaInfoCard", review)
            return(
                // <div className="bodegaInfoCard">

                    /* <p className="cardText">Reviews for: {this.props.searchTerm }</p> */

                    <ReviewInfoCard 
                        bodega={this.props.bodega} 
                        bodegaAvgRating={this.props.bodegaAvgRating} 
                        filteredReviews= {this.props.filteredReviews} 
                        searchTerm = {this.props.searchTerm} 
                    />
                    //{/* <h3>Reviews for: {this.props.searchTerm.charAt(0).toUpperCase() }</h3>   DELETES  REST OF WORD*/}

                // </div>
            )   
        } )


        let searchTermDisplayNames = {
            "latenight" : "Open Late Night"
        }

        if ( reviewsArray.length > 0){
            return(
                <div className="bodegaInfoCard">
                <p className="cardText"> Reviews: {searchTermDisplayNames[this.props.searchTerm]}</p>
                {/* {reviewsArray} */}
                <ReviewInfoCard 
                            bodega={this.props.bodega} 
                            bodegaAvgRating={this.props.bodegaAvgRating} 
                            filteredReviews= {this.props.filteredReviews} 
                            searchTerm = {this.props.searchTerm} 
                            reviewsArray = {this.props.reviewsArray}
                />
                </div>

            ) //reviewsArray
            } else {
                return(
                    " No reviews! "
                )
            }
    }



        render() {  // this whole render is getting called once for each review. 
            // console.log("PROPS!" , this.props.filteredReviews)

            let reviewsArray = this.renderReviewInfoCards()
            console.log("reviewsArrray : ", reviewsArray)   // is the proper length

            return(
                <div className='bodega-show'>
                    {/* <h4> in Bodega Info Card </h4> */}

                    {reviewsArray}
                    {/* Have Levels:   BodegaInfoCard   ReviewInfoCard   ReviewCategoryCard */}
                </div>
            )
        }


}

