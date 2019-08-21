import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Card, Button, Icon, Form } from 'semantic-ui-react'

export default class ReviewForm extends React.Component{
    state = {
        latenight: "",
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

    render() {
        let marginLeft = {
            marginLeft: 6 + 'em',
        }

        let internalMarginLeft = {
            marginLeft: 1 + 'em',
        }

        let marginTop = {
            marginTop: 1 + 'em',
        }

        let marginBottom = {
            marginBottom: 1 + 'em',
        }

        let marginRight = {
            marginRight: 1 + 'em',
        }

        let textAlign = {
            textAlign: 'center'
        }

        let widthSet = {
            width: 400 + 'px'
        }

        return(
            // console.log();
            
            <Card style={{...textAlign, ...marginTop, ...marginLeft, ...widthSet}}>
                <h2 style={{...textAlign, ...marginTop, ...internalMarginLeft, ...marginRight}}>Add a Review for {this.props.bodegaInfo.name}</h2>
                <Form onSubmit={((e)=>this.props.onNewBodegaReviewSubmit(e))} style={{...internalMarginLeft, ...marginRight}}>
                    <Form.Group inline>
                        <label>Coffee Rating: </label>
                        <select name='coffeenumber' value={this.props.coffeenumber} style={{width: 70 + 'px'}} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}>
                            <option value='0' disabled>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Form.Input label='Coffee Notes' placeholder='Coffee Notes' name='coffeetext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Cat Rating: </label>
                        <select name='catnumber' value={this.props.catnumber} style={{width: 70 + 'px'}} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}>
                            <option value='0' disabled>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Form.Input label='Cat Notes' placeholder='Cat Notes' name='cattext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Sandwich Rating: </label>
                        <select name='sandwichnumber' value={this.props.sandwichnumber} style={{width: 70 + 'px'}} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}>
                            <option value='0' disabled>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Form.Input label='Sandwich Notes' placeholder='Sandwich Notes' name='sandwichtext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Hours Rating: </label>
                        <select name='hoursnumber' value={this.props.hoursnumber} style={{width: 70 + 'px'}} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}>
                            <option value='0' disabled>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Form.Input label='Hours Notes' placeholder='Hours Notes' name='hourstext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Beer Rating: </label>
                        <select name='beernumber' value={this.props.beernumber} style={{width: 70 + 'px'}} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}>
                            <option value='0' disabled>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Form.Input label='Beer Notes' placeholder='Beer Notes' name='beertext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Snacks Rating: </label>
                        <select name='snacknumber' value={this.props.snacknumber} style={{width: 70 + 'px'}} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}>
                            <option value='0' disabled>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Form.Input label=' Snack Notes' placeholder='Snack Notes' name='snacktext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" name="latenight" className="hidd" value={this.props.latenight === "true" ? "false" : "true"} checked={this.props.latenight === "true" ? true : false} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                        <label>Open Late Night?</label><br></br>
                    </div>
                    <Form.Button type='submit' value='submit' style={{...textAlign, ...marginBottom, ...internalMarginLeft, ...marginRight}}>Submit</Form.Button>
                </Form>
            </Card>
        )
    }
}