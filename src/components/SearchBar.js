import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

export default class SearchBar extends React.Component{
    render() {
        return(
            <div class="ui secondary menu" name='search-bar' style={{marginTop: 4.15 + 'em'}}>
                <a class="header item">
                    Search for a Bodega!
                </a>
                <a class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i class="search link icon"></i>
                    </div>
                </a>
                <div class="ui compact menu" name='search-categories'>
                    <div class="ui simple dropdown item">
                        Categories
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <a class="item">Coffee</a>
                            <a class="item">Cat</a>
                            <a class="item">Sandwich</a>
                            <a class="item">Hours</a>
                            <a class="item">Beer</a>
                            <a class="item">Snacks</a>
                            <a class="item">Late Night</a>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}