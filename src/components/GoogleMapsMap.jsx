import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -34.6169921,
      lng: -58.3842611
    },
    zoom: 17
  };

  return (
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-34.6169921}
          lng={-58.3842611}
          text="UADE"
        />
      </GoogleMapReact>
    </div>
  );
}
