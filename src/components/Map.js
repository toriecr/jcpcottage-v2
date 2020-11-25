import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBnzL9f5oIOgV2-jxXaMe_tPFRaT96XewU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);