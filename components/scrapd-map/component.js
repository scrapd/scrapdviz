import Proptypes from 'prop-types';
import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import styled from '@emotion/styled';
import { Cluster, Marker } from 'react-mapbox-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faCarCrash, faMotorcycle, faWalking } from '@fortawesome/free-solid-svg-icons';

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
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  border: '2px solid #A70308',
  cursor: 'pointer'
};

const clusterMarkerStyleXS = {
  ...clusterMarkerStyle,
  width: 30,
  height: 30,
  backgroundColor: '#FF0000'
};

const clusterMarkerStyleS = {
  ...clusterMarkerStyle,
  width: 40,
  height: 40,
  backgroundColor: '#BF0000'
};

const clusterMarkerStyleM = {
  ...clusterMarkerStyle,
  width: 50,
  height: 50,
  backgroundColor: '#800000'
};

const clusterMarkerStyleL = {
  ...clusterMarkerStyle,
  width: 60,
  height: 60,
  backgroundColor: '#400000'
};

const clusterMarkerStyleXL = {
  ...clusterMarkerStyle,
  width: 70,
  height: 70,
  backgroundColor: '#000000'
};

const markerStyle = {
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: '#FC4B51',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #A70308'
};

const markerStyleMotorcycle = {
  ...markerStyle,
  backgroundColor: '#0066CC',
  borderColor: '#0066CC'
};

const markerStylePedestrian = {
  ...markerStyle,
  backgroundColor: '#CCCC00',
  borderColor: '#CCCC00'
};

const markerStyleBicycle = {
  ...markerStyle,
  backgroundColor: 'orange',
  borderColor: 'orange'
};

const markerStyleMotor = {
  ...markerStyle,
  backgroundColor: 'brown',
  borderColor: 'brown'
};

function clusterMarker(coordinates, count) {
  let clusterStyle;
  if (count >= 2 && count <= 4) {
    clusterStyle = clusterMarkerStyleXS;
  } else if (count >= 5 && count <= 7) {
    clusterStyle = clusterMarkerStyleS;
  } else if (count >= 8 && count <= 11) {
    clusterStyle = clusterMarkerStyleM;
  } else if (count >= 12 && count <= 15) {
    clusterStyle = clusterMarkerStyleL;
  } else {
    clusterStyle = clusterMarkerStyleXL;
  }
  return (
    <Marker coordinates={coordinates} style={clusterStyle}>
      <div>{count}</div>
    </Marker>
  );
}

function SingleMarker(fatality) {
  let Icon;
  let markerStyle = markerStyle;
  if (fatality.Type == 'motorcycle') {
    markerStyle = markerStyleMotorcycle;
    Icon = <FontAwesomeIcon icon={faMotorcycle} />;
  } else if (fatality.Type == 'pedestrian') {
    markerStyle = markerStylePedestrian;
    Icon = <FontAwesomeIcon icon={faWalking} />;
  } else if (fatality.Type == 'bicycle') {
    markerStyle = markerStyleBicycle;
    Icon = <FontAwesomeIcon icon={faBiking} />;
  } else if (fatality.Type == 'motor vehicle') {
    markerStyle = markerStyleMotor;
    Icon = <FontAwesomeIcon icon={faCarCrash} />;
  }

  return (
    <Marker key={fatality.Case} style={markerStyle} coordinates={[fatality.Longitude, fatality.Latitude]}>
      {/* <Icon /> */}
      {Icon}
    </Marker>
  );
}

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
          <Cluster ClusterMarkerFactory={clusterMarker}>{this.props.fatalities.map(SingleMarker)}</Cluster>
        </Map>
      </MapDiv>
    );
  }
}

ScrapdMap.propTypes = {
  fatalities: Proptypes.array
};

export default ScrapdMap;
