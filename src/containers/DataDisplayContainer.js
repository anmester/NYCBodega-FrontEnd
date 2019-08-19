import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import MapDoc from '../components/MapDoc'
import SearchBar from '../components/SearchBar'
import BodegaShow from '../components/BodegaShow'
// import ReviewForm from '../components/ReviewForm'
import NavBar from '../components/NavBar'

import MyReviews from './MyReviews'
import BodegaContainer from './BodegaContainer';


export default class DataDisplayContainer extends React.Component{
    state = {
        searchTerm: "",
        searchCategory: "", 
        bodegasAndReviews: ""
    }


    componentDidMount = () => {
        fetch("http://localhost:3000/bodegasreviews")
        .then( res => res.json() )
        .then( br =>  this.setState({bodegasAndReviews:  br}))
    }



    handleSearch = (e, data) => {
        // console.log("Just e: ", e.dispatchConfig)

        // console.log("Just e: ", e._dispatchInstances)
        console.log("Just data: ", data.name)
        this.setState({searchCategory: data.name})

        // console.log("e.target.name",  e.target.name  )
        // console.log("e.target.value", e.target.value )

        // this.setState({searchTerm:, searchCategory: })
    }

    
    render() {
        return(
            <div className='data-display-container'>
                <h2>Inside Data Display Container</h2>
                <NavBar />
                <SearchBar handleSearch={this.handleSearch}/>
                <MapDoc />
                {/* Tori Hid MapDoc bc got error Can't resolve 'react-mapbox-gl'   in mapDc.js */}
                <BodegaShow />
                
                {/* Added temporarily for testing, BodegaContainer should only show after map click */}
                <BodegaContainer />
                {/* <ReviewForm />MOVED TO UNDER BODEGA CONTAINER*/   }
            </div>
        )
    }
}