import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import DataDisplayContainer from './containers/DataDisplayContainer'
import MyReviews from './containers/MyReviews'
import NavBar from './components/NavBar'
import SignUpForm from './components/SignUpForm'

class App extends React.Component {
    state = {
      user: {}
    }
    
    signUpSubmit = (e, user) => {
      e.preventDefault()
      console.log('Sign up user:', user)
      let username = user.username
      let displayname = user.displayname
      let neighborhood = user.neighborhood
      let newUser = {username: username, displayname: displayname, neighborhood: neighborhood}
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json'
        },
        body: JSON.stringify({
          newUser
        })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({user: data})
        this.props.history.push('/home')
      })
    }
  
    render() {
      return (
        <>
          <NavBar submitHandler={this.signUpSubmit}/>
          <Switch>
            <Route 
              path='/login' 
              render= {() => <SignUpForm submitHandler={this.signUpSubmit}/>} 
            />
            <Route 
              path="/home" 
              render={() => <DataDisplayContainer user={this.state.user}/>} 
            />
            <Route
              path="/reviews"
              render={() => (
                <MyReviews user={this.state.user}/>
              )}
            />
          </Switch>
        </>
      );
    }
  }
export default withRouter(App);
