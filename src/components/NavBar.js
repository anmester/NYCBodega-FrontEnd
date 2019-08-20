import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Link } from 'react-router-dom';
import MyReviews from '../containers/MyReviews'
import DataDisplayContainer from '../containers/DataDisplayContainer';

export default class NavBar extends React.Component{
    render() {
        return(
            <>
            <div class="ui top fixed inverted teal menu">
                <div class="header item">
                    <strong>Bodegas!</strong>
                </div>
                <a class="item">
                    <Link to='/home'>
                        Home
                    </Link>
                </a>
                <a class='item'>
                    <Link to='/reviews'>
                        My Reviews
                    </Link>
                </a>
                <a class="item">
                    Logout
                </a>
            </div>
            <Route path='/reviews' render={() => MyReviews}/>
            <Route path='/home' render={() => DataDisplayContainer}/>
            </>
        )
    }
}



