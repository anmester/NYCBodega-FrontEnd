import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import Map from '../components/Map'
import SearchBar from '../components/SearchBar'
import BodegaShow from '../components/BodegaShow'
// import ReviewForm from '../components/ReviewForm'
import NavBar from '../components/NavBar'
import MyReviews from './MyReviews'
import BodegaContainer from './BodegaContainer';

export default class DataDisplayContainer extends React.Component{
    render() {
        return(
            <div className='data-display-container'>
                <h2>Inside Data Display Container</h2>
                <NavBar />
                <SearchBar />
                <Map />
                <BodegaShow />
                
                {/* Added temporarily for testing, BodegaContainer should only show after map click */}
                <BodegaContainer />
                {/* <ReviewForm />MOVED TO UNDER BODEGA CONTAINER*/   }
            </div>
        )
    }
}