import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 34.484110,
  lng: -117.352580
};

function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "header.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LoadScript
      googleMapsApiKey={`${process.env.GATSBY_API_KEY}`}
    > 
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { 
          <Marker 
            position={center} 
            onMouseOver={() => {
              setSelectedMarker(true);
            }}
          />
        }
        {selectedMarker && (
          <InfoWindow 
            position={center}
            onCloseClick={()=> {
              setSelectedMarker(null);
            }}
          >
            <div style={{ textAlign: `center` }}>
              <h2>JCP Cottage</h2>
              <p>14241 La Mirada St. Victorville, CA 92392</p>
              <Img fluid={data.image.childImageSharp.fluid} /> 
            </div>
          </InfoWindow>
        )}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);