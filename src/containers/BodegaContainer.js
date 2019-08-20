import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import ReviewForm from '../components/ReviewForm'


export default class BodegaContainer extends React.Component{
    
    state={
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

    onNewBodegaReviewChange = (e) =>{
        let f = e.target.name
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


    onNewBodegaReviewSubmit = (e) =>{
        e.preventDefault();
        var backendURL="http://localhost:3000"
        console.log("e.target.name - ", e.target.name )
        console.log("e.target.value - ", e.target.value )

        let newReviewCopy = {...this.state}

            newReviewCopy.user_id= this.props.user.id;          
            newReviewCopy.bodega_id= 2;           // HARD CODED
            newReviewCopy.latenight= this.state.latenight.includes("true") ? true : false;
            newReviewCopy.coffeenumber= this.state.coffeenumber ? parseInt(this.state.coffeenumber) : 0;
            newReviewCopy.catnumber= this.state.catnumber ? parseInt(this.state.catnumber) : 0;
            newReviewCopy.sandwichnumber= this.state.sandwichnumber ?  parseInt(this.state.sandwichnumber) : 0;
            newReviewCopy.hoursnumber= this.state.hoursnumber ? parseInt(this.state.hoursnumber) : 0;
            newReviewCopy.beernumber= this.state.beernumber ? parseInt(this.state.beernumber) : 0;
            newReviewCopy.snacknumber= this.state.snacknumber ? parseInt(this.state.snacknumber) : 0;

            console.log("newReviewCopy is --", newReviewCopy)

        fetch(`${backendURL}/reviews`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                newReviewCopy
            })
        }).then( res => res.json() )
        .then( newReviewResp => {
            console.log("newReviewResp", newReviewResp)   // WORKS
            return(
                // reset state  &trigger re-render of 
                this.setState({
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
                })

                // What DO we want to do here?  Redirect to My Reviews and show posted review? 
                // <Review beernumber={newReviewResp.beernumber}/>
            )
        })
    }


    render() {
        return(
            <React.Fragment>
                <h2>Inside Bodega Container</h2>
                <ReviewForm 
                    onNewBodegaReviewChange={this.onNewBodegaReviewChange} 
                    onNewBodegaReviewSubmit={this.onNewBodegaReviewSubmit}
                    bodega_id = {this.state.bodega_id}
                    overallreview = {this.state.overallreview}
                    latenight = {this.state.latenight}
                    coffeenumber = {this.state.coffeenumber}
                    coffeetext = {this.state.coffeetext}
                    catnumber = {this.state.catnumber}
                    cattext = {this.state.cattext}
                    sandwichnumber = {this.state.sandwichnumber}
                    sandwichtext = {this.state.sandwichtext}
                    hoursnumber = {this.state.hoursnumber}
                    hourstext = {this.state.hourstext}
                    beernumber = {this.state.beernumber}
                    beertext = {this.state.beertext}
                    snacknumber = {this.state.snacknumber}
                    snacktext = {this.state.snacktext}
                /> 
            </React.Fragment>
        )
    }
}