import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
import Review from '../components/Review'

export default class MyReviews extends React.Component{
    
    state = {
        reviews: [],
        bodegas: [],
        clicked: false,
        editComplete: '',
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

    editBodegaChange = (e) =>{
        let f = e.target.name
        console.log('please let snacks work', f)
        switch(f) {
            case "latenight":
                if (e.target.value === "false" || e.target.value === false ) {
                    this.setState({latenight: "false"})
                } else {
                    this.setState({latenight: "true"})
                }
                break;
            default:
                this.setState({[e.target.name]: e.target.value})
        }
    }

    editBodegaSubmit = (e, review) => {
        e.preventDefault();
        var backendURL="http://localhost:3000"
        let reviewID = review.id
        let userID = review.user_id
        let bodegaID = review.bodega_id

        let editedReview = {...this.state}

            editedReview.user_id= userID;           
            editedReview.bodega_id= bodegaID;
            editedReview.review_id= reviewID;             
            editedReview.latenight= this.state.latenight.includes("true") ? true : false;
            editedReview.coffeenumber= this.state.coffeenumber ? parseInt(this.state.coffeenumber) : 0;
            editedReview.catnumber= this.state.catnumber ? parseInt(this.state.catnumber) : 0;
            editedReview.sandwichnumber= this.state.sandwichnumber ?  parseInt(this.state.sandwichnumber) : 0;
            editedReview.hoursnumber= this.state.hoursnumber ? parseInt(this.state.hoursnumber) : 0;
            editedReview.beernumber= this.state.beernumber ? parseInt(this.state.beernumber) : 0;
            editedReview.snacknumber= this.state.snacknumber ? parseInt(this.state.snacknumber) : 0;

        fetch(`${backendURL}/reviews/${reviewID}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PATCH',
            body: JSON.stringify({
                editedReview
            })
        })
        .then(res => res.json())
        .then(editedReviewRes => {
            // console.log('data we get back', editedReviewRes)
            let targetReviews = this.state.reviews.filter(review => review.id !== editedReviewRes.id)
            this.setState({reviews: [ ...targetReviews, editedReviewRes], editComplete : "true"})
            // console.log('target reviews', targetReviews)
            this.editCompleteFlipBackToFalse()
        })
    }
    
    editCompleteFlipBackToFalse() {
        console.log("called editCompleteFlipBackToFalse")
        this.setState({editComplete: ""})
    }

    handleDelete = (e, review) => {
        e.preventDefault();
        var backendURL="http://localhost:3000"
        let reviewID = review.id

        fetch(`${backendURL}/reviews/${reviewID}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({editcomplete: 'true'})
            this.editCompleteFlipBackToFalse()
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/userreviews/2')
         .then(resp => resp.json())
         .then(apiData =>
          this.setState({ reviews: apiData[0], bodegas: apiData.slice(1, apiData.length) })
        );
    }
    
    render() {
        console.log('bodegas', this.state.bodegas)
        console.log('reviews', this.state.reviews)
        let reviewArray = this.state.reviews.map(review => 
            <Review 
                key={review.id} 
                review={review}
                review_id={review.id} 
                editComplete={this.state.editComplete}
                handleDelete={this.handleDelete}
                bodegas={this.state.bodegas}
                editBodegaChange={this.editBodegaChange} 
                editBodegaSubmit={this.editBodegaSubmit}
                bodega_id = {review.bodega_id}
                overallreview = {review.overallreview}
                latenight = {review.latenight}
                coffeenumber = {review.coffeenumber}
                coffeetext = {review.coffeetext}
                catnumber = {review.catnumber}
                cattext = {review.cattext}
                sandwichnumber = {review.sandwichnumber}
                sandwichtext = {review.sandwichtext}
                hoursnumber = {review.hoursnumber}
                hourstext = {review.hourstext}
                beernumber = {review.beernumber}
                beertext = {review.beertext}
                snacknumber = {review.snacknumber}
                snacktext = {review.snacktext}
            />
        )
        return(
            <React.Fragment>
                <h2>My Reviews!</h2>
                <Card.Group className='my-reviews' itemsPerRow='3'>
                    {reviewArray}
                </Card.Group>
            </React.Fragment>
        )
    }
}
