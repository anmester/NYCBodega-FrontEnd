import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import ReviewInfoCard from './ReviewInfoCard.js';
import  '../SearchReviews.css';
import { relative } from 'path';
import { Card, Form } from 'semantic-ui-react'

export default class BodegaInfoCard extends React.Component{

    renderReviewInfoCards = () => {
        let reviewsArray = this.props.filteredReviews.map(review  => {
            console.log("review in BodegaInfoCard", review)
            return(
                <Card>
                    <ReviewInfoCard 
                        bodega={this.props.bodega} 
                        bodegaAvgRating={this.props.bodegaAvgRating} 
                        filteredReviews= {this.props.filteredReviews} 
                        searchTerm = {this.props.searchTerm} 
                    />
                </Card>
            )   
        } )

        let searchTermDisplayNames = {
            "latenight" : "Open Late Night"
        }

        if ( reviewsArray.length > 0){
            return(
                <Card className="reviewInfoCard">
                    <p className="cardText"> Reviews: {searchTermDisplayNames[this.props.searchTerm]}</p>
                    <ReviewInfoCard 
                        bodega={this.props.bodega} 
                        bodegaAvgRating={this.props.bodegaAvgRating} 
                        filteredReviews= {this.props.filteredReviews} 
                        searchTerm = {this.props.searchTerm} 
                        reviewsArray = {this.props.reviewsArray}
                    />
                </Card>
            ) 
            } else {
                return(
                    " No reviews! "
                )
            }
    }



        render() { 
            let reviewsArray = this.renderReviewInfoCards()
            return(
                <div className='reviewInfoCard'>
                    {reviewsArray}
                </div>
            )
        }


}

