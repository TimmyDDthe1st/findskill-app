import React from 'react';
import MapDisplay from './MapDisplay';
import location from '../fixtures/locationData.json';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Skill App</h1>
      <MapDisplay location={location} zoomLevel={8}/>
    </div>
  );
}

export default App;
