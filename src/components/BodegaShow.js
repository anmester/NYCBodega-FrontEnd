import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import BodegaInfoCard from './BodegaInfoCard.js';
import  '../SearchReviews.css';
import { Card } from 'semantic-ui-react';


export default class BodegaShow extends React.Component{

    state= {

    }

    renderBodegaInfoCards = () => {
        let delisArray = this.props.filterBodegasToShow.map(deli  => {
            return(
                <div className="bodegaCard">
                    <h2 className="cardText">{deli[0]["name"]} </h2> 
                    <h3 className="cardText">{deli[0]["neighborhood"]}</h3>
                    <span className="cardText">Average Rating : {deli[1] ? deli[1].toFixed(2) : "No Reviews" }</span><br/> 
                    <BodegaInfoCard                     //only want to return ONE per del
                        bodega={deli[0]} 
                        bodegaAvgRating={deli[1]} 
                        filteredReviews= {deli[2]}
                        searchTerm = {deli[3]}  
                    />
                </div>
            )   
        })
        console.log("delis Array in BodegaShow: ", delisArray)
        return delisArray
    }
    
    addReview = e => {
        console.log(this.props.bodega) // we have the target bodega here to add the review to and can now add a review accordingly
    }
    

    render() {
        let delisArray2;

        if (this.props.filterBodegasToShow){
            delisArray2 = this.renderBodegaInfoCards()
            console.log("delisArray2 is REAL", delisArray2 )   // is array of 5 bodegas 
        }
        

        console.log("in bodega show,  filterBodegasToShow :", this.props.filterBodegasToShow)
        //map props.crazy bodegas array 

        // let bodegaInfo = this.props.bodega[0][0]
        return(
            <Card.Group className='bodega-show' itemsPerRow={4}>
                {delisArray2}
            </Card.Group>
        )
    }
}