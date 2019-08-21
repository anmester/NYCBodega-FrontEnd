import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Card, Form } from 'semantic-ui-react'


export default class Review extends React.Component{
    state = {
        clicked: false,
        user_id: '',
        bodega_id: '',
        review_id: '',
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
        snacksnumber: "",
        snackstext: ""
    }


    handleEdit = (e, review) => {
        console.log('plz work', review)
        this.setState({
            clicked: true
        })
    }
    
    // THIS IS THE EDIT FORM, TORI !!!!!! !!1!1111!
    render() {
        if (this.props.editComplete === "true" && this.state.clicked === true){
            this.setState({clicked: false})
        }

        let targetBodega = this.props.bodegas.filter(bodega => bodega.id === this.props.review.bodega_id)
        return(
            this.state.clicked ?   
                <Card className='edit-form' style={{width: 400 + 'px'}}>
                    <Form onSubmit={(e) => this.props.editBodegaSubmit(e, this.props.review)}> 
                        <h3>Edit Review for {targetBodega[0].name}</h3>
                        <Form.Group inline>
                            <label>Coffee Rating: </label>
                            <select name='coffeenumber' style={{width: 70 + 'px'}} onChange={((e)=>this.props.editBodegaChange(e) )}>
                                <option value='0' disabled>rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <Form.Input label='Coffee Notes' placeholder='Coffee Notes' name='coffeetext' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                        </Form.Group>

                        <Form.Group inline>
                            <label>Cat Rating: </label>
                            <select name='catnumber' style={{width: 70 + 'px'}} onChange={((e)=>this.props.editBodegaChange(e) )}>
                                <option value='0' disabled>rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <Form.Input label='Cat Notes' placeholder='Cat Notes' name='cattext' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                        </Form.Group>

                        <Form.Group inline>
                            <label>Sandwich Rating: </label>
                            <select name='sandwichnumber' style={{width: 70 + 'px'}} onChange={((e)=>this.props.editBodegaChange(e) )}>
                                <option value='0' disabled>rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <Form.Input label='Sandwich Notes' placeholder='Sandwich Notes' name='sandwichtext' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                        </Form.Group>

                        <Form.Group inline>
                            <label>Hours Rating: </label>
                            <select name='hoursnumber' style={{width: 70 + 'px'}} onChange={((e)=>this.props.editBodegaChange(e) )}>
                                <option value='0' disabled>rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <Form.Input label='Hours Notes' placeholder='Hours Notes' name='hourstext' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                        </Form.Group>

                        <Form.Group inline>
                            <label>Beer Rating: </label>
                            <select name='beernumber' style={{width: 70 + 'px'}} onChange={((e)=>this.props.editBodegaChange(e) )}>
                                <option value='0' disabled>rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <Form.Input label='Beer Notes' placeholder='Beer Notes' name='beertext' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                        </Form.Group>

                        <Form.Group inline>
                            <label>Snacks Rating: </label>
                            <select name='snacknumber' style={{width: 70 + 'px'}} onChange={((e)=>this.props.editBodegaChange(e) )}>
                                <option value='0' disabled>rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <Form.Input label=' Snack Notes' placeholder='Snack Notes' name='snacktext' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                        </Form.Group>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" name="latenight" className="hidd" checked={this.props.latenight === "true" ? true : false} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                            <label>Open Late Night?</label><br></br>
                        </div>
                        <Form.Button type='submit' value='submit'>Submit</Form.Button>
                    </Form>
                </Card>
            :
                <Card className='review-card' style={{width: 400 + 'px'}}>
                    <Card.Content>
                        <Card.Header>{targetBodega[0].name}</Card.Header>
                        <Card.Description>
                            <strong>Beer Rating:</strong> {this.props.review.beernumber ? this.props.review.beernumber : 'no rating provided'}<br></br>
                            <strong>Beer Description:</strong> {this.props.review.beertext ? this.props.review.beertext : 'no comment provided'}<br></br><br></br>
                            <strong>Cat Rating:</strong> {this.props.review.catnumber ? this.props.review.catnumber : 'no rating provided'}<br></br>
                            <strong>Cat Description:</strong> {this.props.review.cattext ? this.props.review.cattext : 'no comment provided'}<br></br><br></br>
                            <strong>Coffee Rating:</strong> {this.props.review.coffeenumber ? this.props.review.coffeenumber : 'no rating provided'}<br></br>
                            <strong>Coffee Description:</strong> {this.props.review.coffeetext ? this.props.review.coffeetext : 'no comment provided'}<br></br><br></br>
                            <strong>Sandwich Rating:</strong> {this.props.review.sandwichnumber ? this.props.review.sandwichnumber : 'no rating provided'}<br></br>
                            <strong>Sandwich Description:</strong> {this.props.review.sandwichtext ? this.props.review.sandwichtext : 'no comment provided'}<br></br><br></br>
                            <strong>Snacks Rating:</strong> {this.props.review.snacknumber ? this.props.review.snacknumber : 'no rating provided'}<br></br>
                            <strong>Snacks Description:</strong> {this.props.review.snacktext ? this.props.review.snacktext : 'no comment provided'}<br></br><br></br>
                            <strong>Hours Rating:</strong> {this.props.review.hoursnumber ? this.props.review.hoursnumber : 'no rating provided'}<br></br>
                            <strong>Hours Description:</strong> {this.props.review.hourstext ? this.props.review.hourstext : 'no comment provided'}<br></br><br></br>
                            <strong>Late Night?</strong> {this.props.review.latenight ? 'yes!' : 'no :('}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <button className="ui primary button" onClick={(e) => this.handleEdit(e, this.props.review)}>Edit Review</button>
                        <button className="ui secondary button" onClick={(e) => this.props.handleDelete(e, this.props.review)}>Delete Review</button>
                    </Card.Content>
                </Card>
        )
    }
}