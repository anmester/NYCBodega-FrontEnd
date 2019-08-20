import React from 'react';
import '../App.css';
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
    
        addReview = e => {
        console.log(this.props.bodega) // we have the target bodega here to add the review to and can now add a review accordingly
    }
    

    render() {
        let delisArray2;

        if (this.props.filterBodegasToShow){
            delisArray2 = this.renderBodegaInfoCards()
            console.log("delisArray2 is REAL", delisArray2 )
        }
        

        console.log("in bodega show,  filterBodegasToShow :", this.props.filterBodegasToShow)
        //map props.crazy bodegas array 

        let bodegaInfo = this.props.bodega[0][0]
        return(
            <div className='bodega-show'>
                <h3>Inside Bodega Show</h3>
                {delisArray2}
                <h3>{bodegaInfo.name}</h3>
                <p>Neighborhood: {bodegaInfo.neighborhood}</p>
                <p>Average Rating: {bodegaInfo.averagerating}</p>
                <button onClick={this.props.closeBodegaShow}>Close Bodega</button><br></br>
                <button onClick={this.addReview}>Add Review</button>
            </div>
        )
    }
}