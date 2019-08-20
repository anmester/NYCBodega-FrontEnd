import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

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

        return(
            <React.Fragment>

            <form onSubmit={((e)=>this.props.onNewBodegaReviewSubmit(e))} style={{marginLeft: 1 + 'em'}}> 
                <h3>Add Review</h3>
                <div class='ui container'>
                    <div class="ui form" equal width form>
                        <div class='fields' name='coffee-fields'>
                            <div class="inline fields" name='coffee-number'>
                                <label>Rating coffee?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffeenumber" value="1" tabIndex="1" className="hidd" checked={this.props.coffeenumber === "1"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} />
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="coffeenumber" value="2" tabIndex="2" className="hidd" checked={this.props.coffeenumber === "2"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} />
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffeenumber" value="3" tabIndex="3" className="hidd" checked={this.props.coffeenumber === "3"}  onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} />
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffeenumber" value="4" tabIndex="4" className="hidd" checked={this.props.coffeenumber === "4"}  onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} />
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffeenumber" value="5" tabIndex="5" className="hidd" checked={this.props.coffeenumber === "5"}  onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} />
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div input type="text"  class="field" name='coffeetext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} >
                                <label>coffee review</label>
                                <textarea name='coffeetext' rows="2"></textarea>
                            </div>
                        </div>
                        
                        <div class='fields' name='cat-fields'>
                            <div class="inline fields" name='cat-number'>
                                <label>Rating cat?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="catnumber" tabIndex="0" className="hidd" value="1" checked={this.props.catnumber === "1"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="catnumber" tabindex="0" className="hidd" value="2" checked={this.props.catnumber === "2"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="catnumber" tabindex="0" className="hidd" value="3" checked={this.props.catnumber === "3"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="catnumber" tabindex="0" className="hidd" value="4" checked={this.props.catnumber === "4"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="catnumber" tabindex="0" className="hidd" value="5" checked={this.props.catnumber === "5"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='cattext'>
                                <label>cat review</label>
                                <textarea rows="2" name='cattext' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} ></textarea>
                            </div>
                        </div>

                        <div class='fields' name='sandwich-fields'>
                            <div class="inline fields" name='sandwich-number'>
                                <label>Rating sandwich?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="1" checked={this.props.sandwichnumber === "1"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} />
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="2" checked={this.props.sandwichnumber === "2"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="3" checked={this.props.sandwichnumber === "3"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="4" checked={this.props.sandwichnumber === "4"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwichnumber" tabindex="0" className="hidd" value="5" checked={this.props.sandwichnumber === "5"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='sandwichtext'>
                                <label>sandwich review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='hours-fields'>
                            <div class="inline fields" name='hours-number'>
                                <label>Rating hours?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="1" checked={this.props.hoursnumber === "1"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="2" checked={this.props.hoursnumber === "2"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="3" checked={this.props.hoursnumber === "3"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="4" checked={this.props.hoursnumber === "4"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hoursnumber" tabindex="0" className="hidd" value="5" checked={this.props.hoursnumber === "5"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='hourstext'>
                                <label>hours review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='beer-fields'>
                            <div class="inline fields" name='beer-number'>
                                <label>Rating beer?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beernumber" tabindex="0" className="hidd" value="1" checked={this.props.beernumber === "1"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="beernumber" tabindex="0" className="hidd" value="2" checked={this.props.beernumber === "2"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beernumber" tabindex="0" className="hidd" value="3" checked={this.props.beernumber === "3"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beernumber" tabindex="0" className="hidd" value="4" checked={this.props.beernumber === "4"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beernumber" tabindex="0" className="hidd" value="5" checked={this.props.beernumber === "5"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='beertext'>
                                <label>beer review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='snacks-fields'>
                            <div class="inline fields" name='snacks-number'>
                                <label>Rating snacks?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacknumber" tabindex="0" className="hidd" value="1" checked={this.props.snacknumber === "1"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="snacknumber" tabindex="0" className="hidd" value="2" checked={this.props.snacknumber === "2"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacknumber" tabindex="0" className="hidd" value="3" checked={this.props.snacknumber === "3"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacknumber" tabindex="0" className="hidd" value="4" checked={this.props.snacknumber === "4"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacknumber" tabindex="0" className="hidd" value="5" checked={this.props.snacknumber === "5"} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='snacktext'>
                                <label>snacks review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='field' name='late-night'>
                            <div class="ui checkbox">
                                <input type="checkbox" tabindex="0" name="latenight" className="hidd" value={this.props.latenight === "true" ? "false" : "true"} checked={this.props.latenight === "true" ? true : false} onChange={((e)=>this.props.onNewBodegaReviewChange(e) )}/>
                                <label>Open Late Night?</label>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Submit" onSubmit={((e)=>this.props.onNewBodegaReviewSubmit)}></input>
            </form>
            </React.Fragment>
        )
    }
}