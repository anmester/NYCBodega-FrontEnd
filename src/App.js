import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import DataDisplayContainer from './containers/DataDisplayContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <h1>NYC Bodega App</h1>
      <NavBar />
      <DataDisplayContainer />
    </div>
  );
}

export default App;
