import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import BodegaMapRender from './BodegaMapRender'
import ReviewForm from './ReviewForm'


export default class ClickBodegaShow extends React.Component{
    
    // set state here, create new sep components for the bodega display and the review form, render conditionally on click

    state = {
        reviewClicked: false
    }
    
    addReview = e => {
        console.log(this.props.bodega) // we have the target bodega here to add the review to and can now add a review accordingly
        this.setState({reviewClicked: true})
    }
    

    render() {
        let bodegaInfo = this.props.bodega[0][0]
        return(
            <div className='click-bodega-show'>
                {this.state.reviewClicked ? 
                    <ReviewForm 
                        bodegaInfo={bodegaInfo}
                        onNewBodegaReviewChange={this.props.onNewBodegaReviewChange} 
                        onNewBodegaReviewSubmit={this.props.onNewBodegaReviewSubmit}
                        bodega_id = {this.props.bodega_id}
                        overallreview = {this.props.overallreview}
                        latenight = {this.props.latenight}
                        coffeenumber = {this.props.coffeenumber}
                        coffeetext = {this.props.coffeetext}
                        catnumber = {this.props.catnumber}
                        cattext = {this.props.cattext}
                        sandwichnumber = {this.props.sandwichnumber}
                        sandwichtext = {this.props.sandwichtext}
                        hoursnumber = {this.props.hoursnumber}
                        hourstext = {this.props.hourstext}
                        beernumber = {this.props.beernumber}
                        beertext = {this.props.beertext}
                        snacknumber = {this.props.snacknumber}
                        snacktext = {this.props.snacktext}
                    />
                    : <BodegaMapRender bodegaInfo={bodegaInfo} closeBodegaShow={this.props.closeBodegaShow} addReview={this.addReview}/>}
            </div>
        )
    }
}