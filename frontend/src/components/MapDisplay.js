import React from 'react';
import '../styles/MapDisplay.css';

const mapImage = require('../images/maps.png');

const MapDisplay = () => (
    <img
      className="map" 
      src={mapImage}
      alt="Person Location Map"
    />
  )

  export default MapDisplay;