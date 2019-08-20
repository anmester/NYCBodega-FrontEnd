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
import { throwStatement } from '@babel/types';


export default class DataDisplayContainer extends React.Component{
    state = {
        searchTerm: "",
        searchCategory: "", 
        bodegasAndReviews: "",
        justBodegas: "",
        justReviews: ""
    }


    componentDidMount = () => {
        fetch("http://localhost:3000/bodegasreviews")
        .then( res => res.json() )
        .then( br =>  {
            let justBodegasArray = []
            for (var property in br){
                if (!property.includes("all_reviews")){
                    justBodegasArray.push(br[property])
                }
            }

            this.setState({
            bodegasAndReviews:  br,
            justBodegas: justBodegasArray,
            justReviews: br.all_reviews
            })
        })
    }



    handleSearch = (e, data) => {
        if (e.target.name === "searchTerm") {
            console.log("In handle search, searchTerm is: ", e.target.value)
            this.setState({searchTerm: e.target.value})
        } else {
            console.log("In handle search, searchCateohory is: ", data.value)

            this.setState({searchCategory: data.value})
        }

        console.log("this.state.justBodegas : ", this.state.justBodegas)
        console.log("this.state.justReviews : ", this.state.justReviews)

    }

    
    render() {
        return(
            <div className='data-display-container'>
                <h2>Inside Data Display Container</h2>
                <NavBar />
                <SearchBar handleSearch={this.handleSearch}/>
                <MapDoc />
                {/* Tori Hid MapDoc bc got error Can't resolve 'react-mapbox-gl'   in mapDc.js needed to install it */}
                
                {/* Added temporarily for testing, BodegaContainer should only show after map click OR  SEARCH */}
                <BodegaContainer 
                    searchTerm= {this.state.searchTerm}
                    searchCategory= {this.state.searchCategory}
                    justBodegas = {this.state.justBodegas}
                    justReviews = {this.state.justReviews}

                    // Add Map Search stuff? 
                />
                {/* <ReviewForm />MOVED TO UNDER BODEGA CONTAINER*/   }

                <BodegaShow />
            </div>
        )
    }
}