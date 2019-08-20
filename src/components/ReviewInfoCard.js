import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import CategoryReviewCard from './CategoryReviewCard.js';



export default class ReviewInfoCard extends React.Component{

    formatDate = (currentDate) => {
        // var currentDate = new Date();

        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();

        var dateString = date + "-" +(month + 1) + "-" + year;
        return dateString
    }



    categoryReviewCards = () => {
        // make a review info card for each reviewinfo
    let categoryReviewsArray = this.props.filteredReviews.map(review  => {
        console.log("review....." , review)

        switch(this.props.searchTerm ){
            case "ALL":
                    return(
                        <div>
                            <CategoryReviewCard 
                                bodega={this.props.bodega} 
                                bodegaAvgRating={this.props.bodegaAvgRating} 
                                filteredReviews= {this.props.filteredReviews} 
                                searchTerm = {this.props.searchTerm} 
                            />
                        <h3>"Late Night? {review["latenight"]}</h3>
                        <h3>Coffee Rating:  {review["coffeenumber"]} : {review["coffeetext"]}</h3>
                        <h3>Cat Rating:  {review["catnumber"]} : {review["cattext"]}</h3>
                        <h3>Sandwich Rating:  {review["sandwichnumber"]}: {review["sandwichtext"]}</h3>
                        <h3>Hours Rating:  {review["hoursnumber"]} : {review["hourstext"]}</h3>
                        <h3>Beer Rating:  {review["beernumber"]} : {review["beertext"]}</h3>
                        <h3>Snack Rating:  {review["snacknumber"]} : {review["snacktext"]}</h3>
                        </div>
                        )
            break;
            case "latenight":
                    return(
                        <div>
                            <CategoryReviewCard 
                                bodega={this.props.bodega} 
                                bodegaAvgRating={this.props.bodegaAvgRating} 
                                filteredReviews= {this.props.filteredReviews} 
                                searchTerm = {this.props.searchTerm} 
                            />
                            <h3>Reported {review[0].toString()} on Review Date: {Date.parse(review[2])}</h3>
        
                        </div>
                    )  
            break;
            default:
                    return(
                        <div>
                            <CategoryReviewCard 
                                bodega={this.props.bodega} 
                                bodegaAvgRating={this.props.bodegaAvgRating} 
                                filteredReviews= {this.props.filteredReviews} 
                                searchTerm = {this.props.searchTerm} 
                            />
                            <h3>Review Date: {review["created_at"] ? review["created_at"] : review[3]  }</h3>
                            <h3>Rate: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "number"] : review[1]  }</h3>
                            <h3>Details: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "text"] : review[0]  }</h3>
        
                        </div>
                    )  
        }

            // return(
            //     <div>
            //         <CategoryReviewCard 
            //             bodega={this.props.bodega} 
            //             bodegaAvgRating={this.props.bodegaAvgRating} 
            //             filteredReviews= {this.props.filteredReviews} 
            //             searchTerm = {this.props.searchTerm} 
            //         />
            //         {/* <h3>Reviews for: {this.props.searchTerm.charAt(0).toUpperCase() }</h3>   DELETES  REST OF WORD*/}
            //         {/* Because ALL search returns an Object, single category returns array */}
            //         <h3>Review Date: {review["created_at"] ? review["created_at"] : review[3]  }</h3>
            //         <h3>Rate: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "number"] : review[1]  }</h3>
            //         <h3>Details: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "text"] : review[0]  }</h3>

            //     </div>
            // )   

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