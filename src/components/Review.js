import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

export default class Review extends React.Component{
    render() {
        console.log('users bodegas', this.props.bodegas)
        let targetBodega = this.props.bodegas.filter(bodega => bodega.id === this.props.review.bodega_id)
        return(
            <Card className='review-card'>
                <Card.Content>
                    <Card.Header>{targetBodega[0].name}</Card.Header>
                    <Card.Description>
                        <h4>Overall Rating: {this.props.review.overallreview}</h4>
                        <strong>Beer Rating:</strong> {this.props.review.beernumber ? this.props.review.beernumber : 'no rating provided'}<br></br>
                        <strong>Beer Description:</strong> {this.props.review.beertext ? this.props.review.beertext : 'no comment provided'}<br></br><br></br>
                        <strong>Cat Rating:</strong> {this.props.review.catnumber ? this.props.review.catnumber : 'no rating provided'}<br></br>
                        <strong>Cat Description:</strong> {this.props.review.cattext ? this.props.review.cattext : 'no comment provided'}<br></br><br></br>
                        <strong>Coffee Rating:</strong> {this.props.review.coffeenumber ? this.props.review.coffeenumber : 'no rating provided'}<br></br>
                        <strong>Coffee Description:</strong> {this.props.review.coffeetext ? this.props.review.coffeetext : 'no comment provided'}<br></br><br></br>
                        <strong>Sandwich Rating:</strong> {this.props.review.sandwichnumber ? this.props.review.sandwichnumber : 'no rating provided'}<br></br>
                        <strong>Sandwich Description:</strong> {this.props.review.sandwichtext ? this.props.review.coffeetext : 'no comment provided'}<br></br><br></br>
                        <strong>Snacks Rating:</strong> {this.props.review.snacksnumber ? this.props.review.snacksnumber : 'no rating provided'}<br></br>
                        <strong>Snacks Description:</strong> {this.props.review.snackstext ? this.props.review.snackstext : 'no comment provided'}<br></br><br></br>
                        <strong>Hours Rating:</strong> {this.props.review.hoursnumber ? this.props.review.hoursnumber : 'no rating provided'}<br></br>
                        <strong>Hours Description:</strong> {this.props.review.hourstext ? this.props.review.hourstext : 'no comment provided'}<br></br><br></br>
                        <strong>Late Night?</strong> {this.props.review.latenight ? 'yes!' : 'no :('}
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <button class="ui primary button">Edit Review</button>
                    <button class="ui secondary button">Delete Review</button>
                </Card.Content>
            </Card>
        )
    }
}