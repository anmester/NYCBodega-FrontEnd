import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import Review from '../components/Review'
import NavBar from '../components/NavBar'

export default class MyReviews extends React.Component{
    
    state = {
        reviews: [],
        bodegas: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/userreviews/2')
         .then(resp => resp.json())
         .then(apiData =>
          this.setState({ reviews: apiData[0], bodegas: apiData.splice(0,1) })
         );
    }
    
    render() {
        console.log('bodegas', this.state.bodegas)
        console.log('reviews', this.state.reviews)
        let reviewArray = this.state.reviews.map(review => <Review key={review.id} review={review}/>)
        return(
            <div className='my-reviews'>
                <h2>My Reviews!</h2>
                {reviewArray}
            </div>
        )
    }
}