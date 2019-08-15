import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

export default class NavBar extends React.Component{
    render() {
        return(
            <div class="ui secondary  menu">
                <a class="item active">
                    Home
                </a>
                <a class="item">
                    My Reviews
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
          </div>
        )
    }
}



