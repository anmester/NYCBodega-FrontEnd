import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Link, Switch } from 'react-router-dom';
import DataDisplayContainer from './containers/DataDisplayContainer'
import MyReviews from './containers/MyReviews'
import NavBar from './components/NavBar'
import Login from './components/Login'

class App extends React.Component {
    render() {
      return (
      <Switch>
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
export default App;
