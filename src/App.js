import React, { Component } from 'react';
import LocationContainer from  './containers/LocationContainer'
import WeatherContainer from './containers/WeatherContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Local Weather</h1>

        <LocationContainer/>
        <WeatherContainer/>
        
      </div>
    );
  }
}

export default App;
