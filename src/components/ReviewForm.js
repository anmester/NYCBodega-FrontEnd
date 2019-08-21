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
            marginLeft: 1 + 'em',
        }

        let marginTop = {
            marginTop: 1 + 'em',
        }

        let marginRight = {
            marginRight: 1 + 'em',
        }

        let textAlign = {
            textAlign: 'center'
        }

        return(
            <React.Fragment>
                <h2 style={{...textAlign, ...marginTop}}>Add a Review for {this.props.bodegaInfo.name}</h2>
                <Form onSubmit={((e)=>this.props.onNewBodegaReviewSubmit(e))} style={{...marginTop, ...marginLeft, ...marginRight}}>
                    <Form.Group inline>
                        <label>Coffee Rating</label>
                        <Form.Radio
                            label='1'
                            name="coffeenumber" 
                            value="1" 
                            checked={this.props.coffeenumber === "1"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='2'
                            name="coffeenumber" 
                            value="2" 
                            checked={this.props.coffeenumber === "2"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='3'
                            name="coffeenumber" 
                            value="3" 
                            checked={this.props.coffeenumber === "3"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='4'
                            name="coffeenumber" 
                            value="4" 
                            checked={this.props.coffeenumber === "4"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='5'
                            name="coffeenumber" 
                            value="5" 
                            checked={this.props.coffeenumber === "5"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Input label='Coffee Notes' placeholder='Coffee Notes' name='coffeetext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Cat Rating</label>
                        <Form.Radio
                            label='1'
                            name="catnumber" 
                            value="1" 
                            checked={this.props.catnumber === "1"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='2'
                            name="catnumber" 
                            value="2" 
                            checked={this.props.catnumber === "2"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='3'
                            name="catnumber" 
                            value="3" 
                            checked={this.props.catnumber === "3"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='4'
                            name="catnumber" 
                            value="4" 
                            checked={this.props.catnumber === "4"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='5'
                            name="catnumber" 
                            value="5" 
                            checked={this.props.catnumber === "5"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Input label='Cat Notes' placeholder='Cat Notes' name='cattext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Sandwich Rating</label>
                        <Form.Radio
                            label='1'
                            name="sandwichnumber" 
                            value="1" 
                            checked={this.props.sandwichnumber === "1"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='2'
                            name="sandwichnumber" 
                            value="2" 
                            checked={this.props.sandwichnumber === "2"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='3'
                            name="sandwichnumber" 
                            value="3" 
                            checked={this.props.sandwichnumber === "3"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='4'
                            name="sandwichnumber" 
                            value="4" 
                            checked={this.props.sandwichnumber === "4"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='5'
                            name="sandwichnumber" 
                            value="5" 
                            checked={this.props.sandwichnumber === "5"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Input label='Sandwich Notes' placeholder='Sandwich Notes' name='sandwichtext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Hours Rating</label>
                        <Form.Radio
                            label='1'
                            name="hoursnumber" 
                            value="1" 
                            checked={this.props.hoursnumber === "1"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='2'
                            name="hoursnumber" 
                            value="2" 
                            checked={this.props.hoursnumber === "2"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='3'
                            name="hoursnumber" 
                            value="3" 
                            checked={this.props.hoursnumber === "3"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='4'
                            name="hoursnumber" 
                            value="4" 
                            checked={this.props.hoursnumber === "4"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='5'
                            name="hoursnumber" 
                            value="5" 
                            checked={this.props.hoursnumber === "5"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Input label='Hours Notes' placeholder='Hours Notes' name='hourstext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Beer Rating</label>
                        <Form.Radio
                            label='1'
                            name="beernumber" 
                            value="1" 
                            checked={this.props.beernumber === "1"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='2'
                            name="beernumber" 
                            value="2" 
                            checked={this.props.beernumber === "2"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='3'
                            name="beernumber" 
                            value="3" 
                            checked={this.props.beernumber === "3"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='4'
                            name="beernumber" 
                            value="4" 
                            checked={this.props.beernumber === "4"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='5'
                            name="beernumber" 
                            value="5" 
                            checked={this.props.beernumber === "5"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Input label='Beer Notes' placeholder='Beer Notes' name='beertext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Snacks Rating</label>
                        <Form.Radio
                            label='1'
                            name="snacknumber" 
                            value="1" 
                            checked={this.props.snacknumber === "1"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='2'
                            name="snacknumber" 
                            value="2" 
                            checked={this.props.snacknumber === "2"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='3'
                            name="snacknumber" 
                            value="3" 
                            checked={this.props.snacknumber === "3"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='4'
                            name="snacknumber" 
                            value="4" 
                            checked={this.props.snacknumber === "4"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Radio
                            label='5'
                            name="snacknumber" 
                            value="5" 
                            checked={this.props.snacknumber === "5"} 
                            onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}
                        />
                        <Form.Input label='Snack Notes' placeholder='Snack Notes' name='snacktext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                    </Form.Group>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" name="latenight" className="hidd" value={this.props.latenight === "true" ? "false" : "true"} checked={this.props.latenight === "true" ? true : false} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                        <label>Open Late Night?</label><br></br>
                    </div>
                    <Form.Button type='submit' value='submit'>Submit</Form.Button>
                </Form>
            </React.Fragment>
        )
    }
}