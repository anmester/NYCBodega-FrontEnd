import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'a', text: 'All', value: 'all' },
    { key: 'b', text: 'Coffee', value: 'coffee' },
    { key: 'c', text: 'Cat', value: 'cat' },
    { key: 'd', text: 'Sandwich', value: 'sandwich' },
    { key: 'e', text: 'Hours', value: 'hours' },
    { key: 'f', text: 'Beer', value: 'beer' },
    { key: 'g', text: 'Snacks', value: 'snacks' },
    { key: 'h', text: 'Late Night Hours', value: 'latenight' }
  ]

export default class SearchBar extends React.Component{


    render() {
        return(
            <div class="ui secondary menu" name='search-bar' style={{marginTop: 2.15 + 'em'}}>
                <a class="header item">
                    Search for a Bodega by Category:
                </a>
                <Form.Select onChange={this.props.handleSearch} fluid options={options} placeholder='Categories' />
          </div>
        )
    }
}