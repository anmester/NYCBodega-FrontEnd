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
        snacknumber: "",
        snacktext: ""
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
                <Card className='edit-form' >
                    <Form onSubmit={(e) => this.props.editBodegaSubmit(e, this.props.review)}> 
                        <h3>Edit Review for {targetBodega[0].name}</h3>
                        <div class='ui container'>
                            <div class="ui form" equal width form>
                                <div class='fields' name='coffee-fields'>
                                    <div class="inline field" name='coffee-number'>
                                        <label>How would you rate the coffee?</label>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="coffeenumber" value="1" tabIndex="1" className="hidd" checked={this.props.coffeenumber === "1"} onChange={((e)=>this.props.editBodegaChange(e) )} />
                                                <label>1</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                    <input type="radio" name="coffeenumber" value="2" tabIndex="2" className="hidd" checked={this.props.coffeenumber === "2"} onChange={((e)=>this.props.editBodegaChange(e) )} />
                                                    <label>2</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="coffeenumber" value="3" tabIndex="3" className="hidd" checked={this.props.coffeenumber === "3"}  onChange={((e)=>this.props.editBodegaChange(e) )} />
                                                <label>3</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="coffeenumber" value="4" tabIndex="4" className="hidd" checked={this.props.coffeenumber === "4"}  onChange={((e)=>this.props.editBodegaChange(e) )} />
                                                <label>4</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="coffeenumber" value="5" tabIndex="5" className="hidd" checked={this.props.coffeenumber === "5"}  onChange={((e)=>this.props.editBodegaChange(e) )} />
                                                <label>5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div input type="text"  class="field" name='coffeetext' onChange={((e)=>this.props.editBodegaChange(e) )} >
                                        <label>coffee review</label>
                                        <textarea name='coffeetext' rows="2"></textarea>
                                    </div>
                                </div>
                                
                                <div class='fields' name='cat-fields'>
                                    <div class="field" name='cat-number'>
                                        <label>How would you rate the cat?</label>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="catnumber" tabIndex="0" className="hidd" value="1" checked={this.props.catnumber === "1"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>1</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                    <input type="radio" name="catnumber" tabindex="0" className="hidd" value="2" checked={this.props.catnumber === "2"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                    <label>2</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="catnumber" tabindex="0" className="hidd" value="3" checked={this.props.catnumber === "3"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>3</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="catnumber" tabindex="0" className="hidd" value="4" checked={this.props.catnumber === "4"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>4</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="catnumber" tabindex="0" className="hidd" value="5" checked={this.props.catnumber === "5"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" name='cattext'>
                                        <label>cat review</label>
                                        <textarea rows="2" name='cattext' onChange={((e)=>this.props.editBodegaChange(e) )} ></textarea>
                                    </div>
                                </div>

                                <div class='fields' name='sandwich-fields'>
                                    <div class="field" name='sandwich-number'>
                                        <label>How would you rate the sandwich?</label>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="1" checked={this.props.sandwichnumber === "1"} onChange={((e)=>this.props.editBodegaChange(e) )} />
                                                <label>1</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                    <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="2" checked={this.props.sandwichnumber === "2"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                    <label>2</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="3" checked={this.props.sandwichnumber === "3"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>3</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="4" checked={this.props.sandwichnumber === "4"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>4</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="5" checked={this.props.sandwichnumber === "5"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" name='sandwichtext'>
                                        <label>sandwich review</label>
                                        <textarea rows="2" name='sandwichtext' onChange={((e)=>this.props.editBodegaChange(e) )}></textarea>
                                    </div>
                                </div>

                                <div class='fields' name='hours-fields'>
                                    <div class="field" name='hours-number'>
                                        <label>How would you rate the hours?</label>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="1" checked={this.props.hoursnumber === "1"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>1</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                    <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="2" checked={this.props.hoursnumber === "2"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                    <label>2</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="3" checked={this.props.hoursnumber === "3"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>3</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="4" checked={this.props.hoursnumber === "4"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>4</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="5" checked={this.props.hoursnumber === "5"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" name='hourstext'>
                                        <label>hours review</label>
                                        <textarea rows="2" name='hourstext' onChange={((e)=>this.props.editBodegaChange(e) )}></textarea>
                                    </div>
                                </div>

                                <div class='fields' name='beer-fields'>
                                    <div class="field" name='beer-number'>
                                        <label>How would you rate the beer?</label>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="beernumber" tabindex="0" className="hidd" value="1" checked={this.props.beernumber === "1"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>1</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                    <input type="radio" name="beernumber" tabindex="0" className="hidd" value="2" checked={this.props.beernumber === "2"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                    <label>2</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="beernumber" tabindex="0" className="hidd" value="3" checked={this.props.beernumber === "3"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>3</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="beernumber" tabindex="0" className="hidd" value="4" checked={this.props.beernumber === "4"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>4</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="beernumber" tabindex="0" className="hidd" value="5" checked={this.props.beernumber === "5"} onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" name='beertext'>
                                        <label>beer review</label>
                                        <textarea rows="2" name='beertext' onChange={((e)=>this.props.editBodegaChange(e) )}></textarea>
                                    </div>
                                </div>

                                <div class='fields' name='snacks-fields'>
                                    <div class="field" name='snacks-number'>
                                        <label>How would you rate the snacks?</label>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="snacknumber" tabindex="0" className="hidd" value='1' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>1</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                    <input type="radio" name="snacknumber" tabindex="0" className="hidd" value='2' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                    <label>2</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="snacknumber" tabindex="0" className="hidd" value="3" onChange={((e)=>this.props.editBodegaChange(e))}/>
                                                <label>3</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="snacknumber" tabindex="0" className="hidd" value='4' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>4</label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui radio checkbox">
                                                <input type="radio" name="snacknumber" tabindex="0" className="hidd" value='5' onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                                <label>5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" name='snacktext'>
                                        <label>snacks review</label>
                                        <textarea rows="2" name='snacktext' onChange={((e)=>this.props.editBodegaChange(e) )}></textarea>
                                    </div>
                                </div>

                                <div class='field' name='late-night'>
                                    <div class="ui checkbox">
                                        <input type="checkbox" tabindex="0" name="latenight" className="hidd" onChange={((e)=>this.props.editBodegaChange(e) )}/>
                                        <label>Open Late Night?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Submit"></input>
                    </Form>
                </Card>
            :
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
                            <strong>Sandwich Description:</strong> {this.props.review.sandwichtext ? this.props.review.sandwichtext : 'no comment provided'}<br></br><br></br>
                            <strong>Snacks Rating:</strong> {this.props.review.snacksnumber ? this.props.review.snacksnumber : 'no rating provided'}<br></br>
                            <strong>Snacks Description:</strong> {this.props.review.snackstext ? this.props.review.snackstext : 'no comment provided'}<br></br><br></br>
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