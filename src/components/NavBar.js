import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Link } from 'react-router-dom';
import MyReviews from '../containers/MyReviews'

export default class NavBar extends React.Component{
    render() {
        return(
            <div class="ui secondary  menu">
                <a class="item active">
                    Home
                </a>
                <a class='item'>
                    <Link to='/MyReviews'>
                        My Reviews
                    </Link>
                </a>
                <div class="right menu">
                    <div class="item">
                        <div class="ui icon input">
                            <input type="text" placeholder="Search..."/>
                            <i class="search link icon"></i>
                        </div>
                    </div>
                    <a class="ui item">
                        Logout
                    </a>
                </div>
                <Route path='/reviews' component={MyReviews}/>
          </div>
        )
    }
}



