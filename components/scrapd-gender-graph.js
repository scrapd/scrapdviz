import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { RadialChart } from 'react-vis';

const ScrapdGenderGraph = props => {
  // The data should come directly from the API.
  let datamap = new Object();
  for (var i = 0; i < props.fatalities.length; i++) {
    let gender = props.fatalities[i]['Gender'];
    if (datamap[gender] === undefined) {
      datamap[gender] = 1;
    } else {
      let genderCount = datamap[gender];
      datamap[gender] = genderCount + 1;
    }
  }

  let data = new Array();
  for (var key in datamap) {
    let tmp = new Object();
    tmp.angle = datamap[key];
    tmp.label = key;
    data.push(tmp);
  }

  const Graph = styled.div({
    display: 'inline-block',
    borderRadius: '5px',
    border: '1px solid',
    textAlign: 'center',
    margin: '2em 0'
  });

  const GraphTitle = styled.p({
    fontSize: '2em',
    textAlign: 'center'
  });

  return (
    <Graph>
      <RadialChart data={data} width={300} height={300} showLabels={true} labelsStyle={{ backgroundColor: 'gray' }} />
      <GraphTitle>Gender distribution</GraphTitle>
    </Graph>
  );
};

ScrapdGenderGraph.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdGenderGraph);
