import React from 'react';
import GoogleMapReact from 'google-maps-react';
import LocationPin from '../components/LocationPin';
import googleApiKey from '../fixtures/auth.json';

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          google={window.google}
          bootstrapURLKeys={{ key: googleApiKey }}
          defaultCenter={location}
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

  export default Map;