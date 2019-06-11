import Proptypes from 'prop-types';
import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import styled from '@emotion/styled';
import { Cluster, Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmdyZWluaG9mZXIiLCJhIjoiY2pwMWt1aGxwMDI0czNrbGJmN2JxaDdsdSJ9.B84ADcgppQIggUtHv4C3UQ',
  height: '400px'
});

const MapDiv = styled.div({
  height: '400px',
  width: '400px',
  display: 'inline-block',
  borderRadius: '5px',
  border: '1px solid',
  margin: '2em 0'
});

const clusterMarkerStyle = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: '#FC4B51',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  border: '2px solid #A70308',
  cursor: 'pointer'
};

const markerStyle = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: '#FC4B51',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #A70308'
};

const clusterMarker = (coordinates, count) => (
  <Marker coordinates={coordinates} style={clusterMarkerStyle}>
    <div>{count}</div>
  </Marker>
);

class ScrapdMap extends React.Component {
  render() {
    return (
      <MapDiv>
        <Map
          style="mapbox://styles/mapbox/streets-v11"
          containerStyle={{
            height: '100%',
            width: '100%'
          }}
          center={[-97.740313, 30.274687]}
          zoom={[10]}
        >
          <Cluster ClusterMarkerFactory={clusterMarker}>
            {this.props.fatalities.map(fatality => (
              <Marker key={fatality.Case} style={markerStyle} coordinates={[fatality.Longitude, fatality.Latitude]}>
                1
              </Marker>
            ))}
          </Cluster>
        </Map>
      </MapDiv>
    );
  }
}

ScrapdMap.propTypes = {
  fatalities: Proptypes.array
};

export default ScrapdMap;
