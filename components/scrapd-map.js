import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl from 'react-mapbox-gl';
import { fetchDataAsync, selectDate } from '../redux/store';
import styled from '@emotion/styled';

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

class ScrapdMap extends React.Component {
  render() {
    return (
      <MapDiv>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
          center={[-97.740313, 30.274687]}
          zoom={[12]}
        />
      </MapDiv>
    );
  }
}

ScrapdMap.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { date_filter, fatalities } = state;
  return { date_filter, fatalities };
};

export default connect(
  mapStateToProps,
  { fetchDataAsync, selectDate }
)(ScrapdMap);
