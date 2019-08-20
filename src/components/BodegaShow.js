import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import BodegaInfoCard from './BodegaInfoCard.js';


export default class BodegaShow extends React.Component{
    state= {

    }

    renderBodegaInfoCards = () => {
        let delisArray = this.props.filterBodegasToShow.map(deli  => {
            return(
                <div>
                    <BodegaInfoCard 
                        bodega={deli[0]} 
                        bodegaAvgRating={deli[1]} 
                        filteredReviews= {deli[2]}
                        searchTerm = {deli[3]}  
                    />
                    <h3>{deli[0]["name"]}</h3>
                    <h3>{deli[0]["neighborhood"]}</h3>
                    <h3>Average Rating : {deli[1]}</h3>
                </div>
            )   
        })

        return delisArray
    }
    

    render() {
        let delisArray2;

        if (this.props.filterBodegasToShow){
            delisArray2 = this.renderBodegaInfoCards()
            console.log("delisArray2 is REAL", delisArray2 )
        }
        

        console.log("in bodega show,  filterBodegasToShow :", this.props.filterBodegasToShow)
        //map props.crazy bodegas array 


        return(
            <div className='bodega-show'>
                <h3>Inside Bodega Show</h3>
                {delisArray2}
                {/* <BodegaInfoCard 
                    bodega={this.props.filterBodegasToShow[deliIndex][0]} 
                    bodegaAvgRating={this.props.filterBodegasToShow[deliIndex][1]} 
                    filteredReviews= {this.props.filterBodegasToShow[deliIndex][2]}
                    searchTerm = {this.props.filterBodegasToShow[deliIndex][3]}  
                /> */}
                {/* Have Levels:   BodegaInfoCard   ReviewInfoCard   ReviewCategoryCard */}

            </div>
        )
    }
}