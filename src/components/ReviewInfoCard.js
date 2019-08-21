import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import CategoryReviewCard from './CategoryReviewCard.js';



export default class ReviewInfoCard extends React.Component{

    formatDate = (input) => {
        if (input) {
            let d = input.toString()     
            let output = []
            output.push(d[5],d[6], "-", d[8],d[9], "-", d[0],d[1],d[2],d[3], "   ", d[11],d[12],":",d[14],d[15] )
            return(output.join(""))
        } else {
            return("")
        }
    }



    categoryReviewCards = () => {
        // make a review info card for each reviewinfo
        console.log("this.props.filteredReviews", this.props.filteredReviews)
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
                        <p className="cardText">"Late Night? {review["latenight"]}</p>
                        <p className="cardText">Coffee Rating:  {review["coffeenumber"]} : {review["coffeetext"]}</p>
                        <p className="cardText">Cat Rating:  {review["catnumber"]} : {review["cattext"]}</p>
                        <p className="cardText">Sandwich Rating:  {review["sandwichnumber"]}: {review["sandwichtext"]}</p>
                        <p className="cardText">Hours Rating:  {review["hoursnumber"]} : {review["hourstext"]}</p>
                        <p className="cardText">Beer Rating:  {review["beernumber"]} : {review["beertext"]}</p>
                        <p className="cardText">Snack Rating:  {review["snacknumber"]} : {review["snacktext"]}</p>
                        </div>
                        )
            break;
            case "latenight":
                    return(
                        // <div>
                            <CategoryReviewCard 
                                bodega={this.props.bodega} 
                                bodegaAvgRating={this.props.bodegaAvgRating} 
                                filteredReviews= {this.props.filteredReviews} 
                                searchTerm = {this.props.searchTerm} 
                                reviewText= {review[0].toString()}
                                reviewDate={this.formatDate(review[2])}
                            />
                            //{/* <p className="cardText">Reported {review[0].toString()} on Review Date: {this.formatDate(review[2])}</p> */}
        
                        //{/* </div> */}
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
                            <p className="cardText">Review Date: {review["created_at"] ? this.formatDate(review["created_at"]) : this.formatDate(review[3])  }</p>
                            <p className="cardText">Rate: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "number"] : review[1]  }</p>
                            <p className="cardText">Details: {this.props.searchTerm === "ALL" ? review[this.props.searchTerm + "text"] : review[0]  }</p>
        
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
    console.log(categoryReviewsArray) 
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
            <div className='bodega-show' className="reviewInfoCard ">
                {/* <h3> Review Info Card </h3> */}
                {reviewData}
                {/* Have Levels:   BodegaInfoCard   ReviewInfoCard   ReviewCategoryCard */}

            </div>
        )
    }
}