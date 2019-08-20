import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import ReviewForm from '../components/ReviewForm'
import Review from '../components/Review'
import BodegaShow from '../components/BodegaShow';

export default class BodegaContainer extends React.Component{
    
    state={
        // NOT SURE IF WANTT TO PUT THIS IN STATE OR NOT: 
        filteredBodegasAndReviewsToDisplay: "Loading",

        // For review in progress: 
        bodega_id: "",
        overallreview: "",
        latenight: "false",
        coffeenumber: "",
        coffeetext: "",
        catnumber: "",
        cattext: "",
        sandwichnumber: "",
        sandwichtext: "",
        hoursnumber: "",
        hourstext: "",
        beernumber: "",
        beertext: "",
        snacknumber: "",
        snacktext: ""
    }


    restructureBodegasReviewsData = ( )=> {
        let returnArray  = []   // Array of arrays.  one element: 
                                // [ bodegaObj, avgReview, [review1, [cat1], [cat2], [cat3]..], [review2, cat1, cat2, cat3..]], [ bode..
        let oneBodegaReviewsArr;
        let returnArrIndexCounter = 0;

        //get bodegaObj
        const allBodegas = this.props.justBodegas

        // RESTRUCTURE BODEGA DATA
        for (let bodega of allBodegas) {
            let avgOverallRating = 0;
            let reviewsCounter = 0;
            returnArray.push([])
            returnArray[returnArrIndexCounter].push(bodega)
            
            // oneBodegaReviewsArr = this.oneBodegaReviews[bodega.id] UNDEFINED
            oneBodegaReviewsArr = this.oneBodegaReviews(bodega.id)    // bodega is 1 Sunny passed in 1st

            // console.log("bodega", bodega)
            // console.log(" bodegaId : ", bodega.id )
            // console.log(" ***oneBodegaReviewsArr : ", oneBodegaReviewsArr)

            for (let review of oneBodegaReviewsArr) {
                console.log("REVIEW is", review)  // Correct, is one review

                if (review.beernumber !== 0){
                    avgOverallRating += (parseInt(review.beernumber))
                    reviewsCounter += 1
                }
                if (review.catnumber !== 0){
                    avgOverallRating += (parseInt(review.catnumber))
                    reviewsCounter += 1
                }
                if (review.coffeenumber !== 0){
                    avgOverallRating += parseInt(review.coffeenumber)
                    reviewsCounter += 1
                }
                if (review.sandwichnumber !== 0){
                    avgOverallRating += parseInt(review.sandwichnumber)
                    reviewsCounter += 1
                }
                if (review.snacknumber !== 0){
                    avgOverallRating += parseInt(review.snacknumber)
                    reviewsCounter += 1
                }
                if (review.hoursnumber !== 0){
                    avgOverallRating += parseInt(review.hoursnumber)
                    reviewsCounter += 1
                }
            }

            // console.log("avgOverallRating  :", avgOverallRating)    // does not reset wit new bodega
            // console.log("reviewsCounter -- ", reviewsCounter)       // SAME

            avgOverallRating = avgOverallRating / reviewsCounter
            //console.log("avgOverallRating  :", avgOverallRating)    // does not reset wit new bodega
            returnArray[returnArrIndexCounter].push(avgOverallRating)
            returnArray[returnArrIndexCounter].push(oneBodegaReviewsArr)

            // add review "headers" to return array
            if (oneBodegaReviewsArr.length > 0){
                for (const review of oneBodegaReviewsArr) {
                    returnArray[returnArrIndexCounter].push([review.id, review.user_id, review.bodega_id, review.created_at, review.updated_at ])
                    returnArray[returnArrIndexCounter].push(review)
                    returnArray[returnArrIndexCounter].push([review.beernumber, review.beertext])
                }
            }
            // avgOverallRating = oneBodegaReviewsArr
            returnArrIndexCounter += 1
        }
        return returnArray
    }


    oneBodegaReviews = (bodegaId) => {
        // console.log(" bodegaId : ", bodegaId)  IS CORRECT
        // console.log("Just Reviews : ", this.props.justReviews)
        // let array3 = this.props.justReviews[3]
        // console.log("Just Reviews  B 3 : ", Object.keys(array3) )    //typeof = obj

        let returnVal;
        for (const bodegasReviews of this.props.justReviews) {
            let thebodegaId = Object.keys(bodegasReviews)
            if ( thebodegaId.includes(bodegaId.toString() ) ){
                returnVal =  bodegasReviews[bodegaId]
            }
            
        }
        // console.log("oneBodegaReviews return val: ", returnVal)
        return returnVal
    }


    
    filterBodegasToShow = () => {
        let allBodegasAndReviewsArr = this.restructureBodegasReviewsData()
        console.log("allBodegasAndReviewsArr: ", allBodegasAndReviewsArr)

        let allBodegasAndReviewsArrIndexCounter = 0;
        let filteredReturnArr = [];

        // First, filter for category dropdown. 
        // Loop through  allBodegasAndReviewsArr, element 2.
        // element 2 is an array of review objs. 
        // loop through each review, extract only the piece related to 
        // the category

        for (const reviewDataArr of allBodegasAndReviewsArr ) {
            // Add Bodega Info, Avg Rating 
            filteredReturnArr[allBodegasAndReviewsArrIndexCounter] = []
            filteredReturnArr[allBodegasAndReviewsArrIndexCounter].push(allBodegasAndReviewsArr[allBodegasAndReviewsArrIndexCounter][0])
            filteredReturnArr[allBodegasAndReviewsArrIndexCounter].push(allBodegasAndReviewsArr[allBodegasAndReviewsArrIndexCounter][1])  //JANKY
            filteredReturnArr[allBodegasAndReviewsArrIndexCounter].push([]) // index 2 to hold array of reviews

            for (const reviewObj of reviewDataArr[2]) {                // console.log("LINE 145", reviewObj)
                // console.log("REVIEW OBJ:", reviewObj)
                if(this.props.searchCategory) {
                    console.log("this.props.searchCategory : ", this.props.searchCategory )
                    filteredReturnArr[allBodegasAndReviewsArrIndexCounter][3] = this.props.searchCategory

                    switch(this.props.searchCategory) {
                        case "coffee":
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push([reviewObj["coffeetext"], reviewObj["coffeenumber"], reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"] ])                            
                            break;
                        case "cat":
                            // console.log("HIT CAT", reviewObj["cattext"]) // WORKS
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push([ reviewObj["cattext"], reviewObj["catnumber"] , reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"] ])
                            break;
                        case "sandwich":
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push([ reviewObj["sandwichtext"], reviewObj["sandwichnumber"], reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"] ])
                            break;
                        case "hours":
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push([ reviewObj["hourstext"], reviewObj["hoursnumber"], reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"] ])
                            break;    
                        case "beer":
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push([ reviewObj["beertext"], reviewObj["beernumber"], reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"] ])
                            break;
                        case "snacks":
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push([ reviewObj["snacktext"], reviewObj["snacknumber"], reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"]])
                            break;
                        case "latenight":
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push( [reviewObj["latenight"], reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"] ])
                            break;
                        default:
                            // show all. 
                            filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push( reviewObj , reviewObj["created_at"], reviewObj["updated_at"], reviewObj["user_id"])
                    } 
                } else {
                    // aLL, as an object
                    filteredReturnArr[allBodegasAndReviewsArrIndexCounter][2].push( reviewObj)
                    filteredReturnArr[allBodegasAndReviewsArrIndexCounter][3] = "ALL"

                }

            }

            allBodegasAndReviewsArrIndexCounter += 1;
        }
        
        
        // this.setState({[e.target.name]: e.target.value})
        
        
        // if(this.state.searchTerm) {
            
            // }
            // this.setState({filteredBodegasAndReviewsToDisplay: filteredReturnArr})
        console.log("filtered Return arR: ", filteredReturnArr )
        return filteredReturnArr;
        // How display review within BodegaShow? 
    }



    filterNumberAndTextCategory = () => {

    }




    render() {
        return(
            <React.Fragment>
            <h2>Inside Bodega Container</h2>
            {this.props.searchInProgress ? <BodegaShow filterBodegasToShow  = {this.filterBodegasToShow()} /> : null}
            </React.Fragment>
        )
    }
}