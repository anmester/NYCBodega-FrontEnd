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
            let deMilitarizedHour;
            let amPm = "AM"

                if (parseInt([d[11], d[12]].join("")) > 12 ) {
                    deMilitarizedHour = parseInt([d[11], d[12]].join("")) - 12
                    amPm = "PM"
                } else {
                    deMilitarizedHour = parseInt( [d[11], d[12]].join(""))
                }


            output.push(d[5],d[6], "-", d[8],d[9], "-", d[0],d[1],d[2],d[3], "    ", deMilitarizedHour,":",d[14],d[15], " ", amPm )
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
            case "all":
                    return(
                        <div>
                            <CategoryReviewCard 
                                bodega={this.props.bodega} 
                                bodegaAvgRating={this.props.bodegaAvgRating} 
                                filteredReviews= {this.props.filteredReviews} 
                                searchTerm = {this.props.searchTerm} 
                            />
                        {/* <p className="cardText">Review Date: {review["created_at"] }</p> */}
                        
                        <p className="cardText">Review Date: { ( review["created_at"] ) ? this.formatDate(review["created_at"]) : "2019"  }</p>
                        <span className="cardText"><b>Late Night? </b>{review["latenight"] ? review["latenight"].toString() : "false"}</span> <br />
                        <span className="cardText"><b>Coffee Rating: </b> { (review["coffeenumber"] === 0 || !review["coffeenumber"]) ? "" : review["coffeenumber"]+ " : "}  { (review["coffeetext"]) ? review["coffeetext"] : "No Review" }</span><br />
                        <span className="cardText"><b>Cat Rating: </b> { (review["catnumber"] === 0 || !review["catnumber"]) ? "" : review["catnumber"]+ " : "}  { (review["cattext"]) ? review["cattext"] : "No Review" }</span><br />
                        <span className="cardText"><b>Sandwich Rating: </b>{ (review["sandwichnumber"] === 0 || !review["sandwichnumber"]) ? "" : review["sandwichnumber"]+ " : "}  { (review["sandwichtext"]) ? review["sandwichtext"] : "No Review" }</span><br />
                        <span className="cardText"><b>Hours Rating: </b> { (review["hoursnumber"] === 0 || !review["hoursnumber"]) ? "" : review["hoursnumber"]+ " : "}  { (review["hourstext"]) ? review["hourstext"] : "No Review" }</span><br />
                        <span className="cardText"><b>Beer Rating: </b> { (review["beernumber"] === 0 || !review["beernumber"]) ? "" : review["beernumber"]+ " : "}  { (review["beertext"]) ? review["beertext"] : "No Review" }</span><br />
                        <span className="cardText"><b>Snack Rating: </b> { (review["snacknumber"] === 0 || !review["snacknumber"]) ? "" : review["snacknumber"]+ " : "}  { (review["snacktext"]) ? review["snacktext"] : "No Review" }</span><br /><br />
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
                                reviewText= {review[0].toString()}
                                reviewDate={this.formatDate(review[2])}
                            />
                             <p className="cardText">Reported <b>{review[0].toString()}</b>  on : {this.formatDate(review[2])}</p>
        
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
                            <span className="cardText"><b>Review Date: </b> {review["created_at"] ? this.formatDate(review["created_at"]) : this.formatDate(review[3])  }</span><br />
                            <span className="cardText"><b>Rate: </b>  { (review[1]) ? (review[1]) : "None" } </span><br />
                            <span className="cardText"><b>Details: </b> { (review[0]) ? (review[0]) : "No review" } </span><br /><br />        
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