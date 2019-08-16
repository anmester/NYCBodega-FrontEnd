import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import MapDoc from '../components/MapDoc'
import SearchBar from '../components/SearchBar'
import BodegaShow from '../components/BodegaShow'
import ReviewForm from '../components/ReviewForm'
import NavBar from '../components/NavBar'

export default class DataDisplayContainer extends React.Component{

    
    render() {
        return(
            <div className='data-display-container'>
                <h2>Inside Data Display Container</h2>
                <NavBar />
                <SearchBar />
                <MapDoc />
                <BodegaShow />
                <ReviewForm />
            </div>
        )
    }
}