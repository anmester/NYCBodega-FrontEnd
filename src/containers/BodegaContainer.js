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
        console.log("e.target.name - ", e.target.name )
        console.log("e.target.value - ", e.target.value )
        let f = e.target.name
        switch(f) {
            case "latenight":
                console.log("In late night case")
                if (e.target.state === "false" || e.target.state === false ) {
                    this.setState({[e.target.name]: "true"})
                } else {
                    this.setState({[e.target.name]: "false"})
                }
                break;
            default:
                this.setState({[e.target.name]: e.target.value})
          }
        

    }


    onNewBodegaReviewSubmit = (e) =>{
        console.log("e.target.name - ", e.target.name )
        console.log("e.target.value - ", e.target.value )
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