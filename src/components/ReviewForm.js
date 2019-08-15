import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

export default class ReviewForm extends React.Component{
    render() {
        return(
            <React.Fragment>
                <h3>Inside ReviewForm</h3>
                <div className='ui container'>
                    <div class="ui form" equal width form>
                        <div class='fields' name='coffee-fields'>
                            <div class="field" name='coffee-number'>
                                <label>How would you rate the coffee?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffee" tabindex="0" class="hidden"/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="coffee" tabindex="0" class="hidden"/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffee" tabindex="0" class="hidden"/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffee" tabindex="0" class="hidden"/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="coffee" tabindex="0" class="hidden"/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='coffee-text'>
                                <label>coffee review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>
                        
                        <div class='fields' name='cat-fields'>
                            <div class="field" name='cat-number'>
                                <label>How would you rate the cat?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="cat" tabindex="0" class="hidden"/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="cat" tabindex="0" class="hidden"/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="cat" tabindex="0" class="hidden"/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="cat" tabindex="0" class="hidden"/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="cat" tabindex="0" class="hidden"/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='cat-text'>
                                <label>cat review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='sandwich-fields'>
                            <div class="field" name='sandwich-number'>
                                <label>How would you rate the sandwich?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwich" tabindex="0" class="hidden"/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="sandwich" tabindex="0" class="hidden"/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwich" tabindex="0" class="hidden"/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwich" tabindex="0" class="hidden"/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="sandwich" tabindex="0" class="hidden"/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='sandwich-text'>
                                <label>sandwich review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='hours-fields'>
                            <div class="field" name='hours-number'>
                                <label>How would you rate the hours?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hours" tabindex="0" class="hidden"/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="hours" tabindex="0" class="hidden"/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hours" tabindex="0" class="hidden"/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hours" tabindex="0" class="hidden"/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="hours" tabindex="0" class="hidden"/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='hours-text'>
                                <label>hours review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='beer-fields'>
                            <div class="field" name='beer-number'>
                                <label>How would you rate the beer?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beer" tabindex="0" class="hidden"/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="beer" tabindex="0" class="hidden"/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beer" tabindex="0" class="hidden"/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beer" tabindex="0" class="hidden"/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="beer" tabindex="0" class="hidden"/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='beer-text'>
                                <label>beer review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='fields' name='snacks-fields'>
                            <div class="field" name='snacks-number'>
                                <label>How would you rate the snacks?</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacks" tabindex="0" class="hidden"/>
                                        <label>1</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                            <input type="radio" name="snacks" tabindex="0" class="hidden"/>
                                            <label>2</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacks" tabindex="0" class="hidden"/>
                                        <label>3</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacks" tabindex="0" class="hidden"/>
                                        <label>4</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="snacks" tabindex="0" class="hidden"/>
                                        <label>5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="field" name='snacks-text'>
                                <label>snacks review</label>
                                <textarea rows="2"></textarea>
                            </div>
                        </div>

                        <div class='field' name='late-night'>
                            <div class="ui checkbox">
                                <input type="checkbox" tabindex="0" class="hidden"/>
                                <label>Open Late Night?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}