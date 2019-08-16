import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import DataDisplayContainer from './containers/DataDisplayContainer'
import MyReviews from './containers/MyReviews'

class App extends React.Component {
    // state = {
    //   user: {}
    // }

    // componentDidMount() {
    //   let token = localStorage.getItem("token")
    //   if (token) {
    //     fetch('backend with users/auth controller', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accepts: 'application/json',
    //         Authorization: `${token}`
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(user => {
    //       this.setState({user: user})
    //       this.props.history.push('/home')
    //     })
    //   }
    // }
    
    
    // signUpSubmit = (e, user) => {
    //   e.preventDefault()
    //   console.log('Sign up user:', user)
    //   fetch('fetch to user create on backend', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accepts: 'application/json'
    //     },
    //     body: JSON.stringify({
    //       user: {
    //         username: 'test', // add in variables with username
    //         password: 'test' // same as above
    //       }
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     localStorage.setItem('token', data.token);
    //     this.setState({user: data.user})
    //   })
    // }
  
    render() {
      return (
      <Switch>
        {/* <Route path='/login' render= {() => <SignUpForm submitHandler={this.signUpSubmit}/>} /> */}
        <Route path="/home" component={DataDisplayContainer} />
        <Route
        path="/reviews"
        render={() => (
          <MyReviews/>
        )}
        />
      </Switch>
      );
    }
  }
export default withRouter(App);
