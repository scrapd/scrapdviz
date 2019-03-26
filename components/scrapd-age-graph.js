import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { RadialChart } from 'react-vis';

function isBetween(x, min, max) {
  return x >= min && x <= max;
}

const ScrapdAgeGraph = props => {
  // The data should come directly from the API.
  let datamap = new Object();
  datamap['00-09'] = 0;
  datamap['10-19'] = 0;
  datamap['20-29'] = 0;
  datamap['30-39'] = 0;
  datamap['40-49'] = 0;
  datamap['50-59'] = 0;
  datamap['60-69'] = 0;
  datamap['70-79'] = 0;
  datamap['80-89'] = 0;
  datamap['90-99'] = 0;
  for (var i = 0; i < props.fatalities.length; i++) {
    let age = props.fatalities[i]['Age'];
    if (isBetween(age, 0, 9)) {
      let ageCount = datamap['00-09'];
      datamap['00-9'] = ageCount + 1;
    } else if (isBetween(age, 10, 19)) {
      let ageCount = datamap['10-19'];
      datamap['10-19'] = ageCount + 1;
    } else if (isBetween(age, 20, 29)) {
      let ageCount = datamap['20-29'];
      datamap['20-29'] = ageCount + 1;
    } else if (isBetween(age, 30, 39)) {
      let ageCount = datamap['30-39'];
      datamap['30-39'] = ageCount + 1;
    } else if (isBetween(age, 40, 49)) {
      let ageCount = datamap['40-49'];
      datamap['40-49'] = ageCount + 1;
    } else if (isBetween(age, 50, 59)) {
      let ageCount = datamap['50-59'];
      datamap['50-59'] = ageCount + 1;
    } else if (isBetween(age, 60, 69)) {
      let ageCount = datamap['60-69'];
      datamap['60-69'] = ageCount + 1;
    } else if (isBetween(age, 70, 79)) {
      let ageCount = datamap['70-79'];
      datamap['70-79'] = ageCount + 1;
    } else if (isBetween(age, 80, 89)) {
      let ageCount = datamap['80-89'];
      datamap['80-89'] = ageCount + 1;
    } else if (isBetween(age, 90, 99)) {
      let ageCount = datamap['90-99'];
      datamap['90-99'] = ageCount + 1;
    } else {
      continue;
    }
  }

  let data = new Array();
  for (var key in datamap) {
    if (datamap[key] === 0) {
      continue;
    }
    let tmp = new Object();
    tmp.angle = datamap[key];
    tmp.label = key;
    data.push(tmp);
  }

  const Graph = styled.div({
    display: 'inline-block',
    borderRadius: '5px',
    border: '1px solid',
    textAlign: 'center'
  });

  const GraphTitle = styled.p({
    fontSize: '2em',
    textAlign: 'center'
  });

  return (
    <Graph>
      <RadialChart data={data} width={300} height={300} showLabels={true} labelsStyle={{ backgroundColor: 'gray' }} />
      <GraphTitle>Age distribution</GraphTitle>
    </Graph>
  );
};

ScrapdAgeGraph.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdAgeGraph);
