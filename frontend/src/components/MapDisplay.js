import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../components/LocationPin';
import GOOGLE_API_KEY from '../fixtures/auth.json';

import '../styles/MapDisplay.css';

const MapDisplay = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          //google={window.google}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          bootstrapURLKeys={GOOGLE_API_KEY}
          defaultCenter={location.location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default MapDisplay;