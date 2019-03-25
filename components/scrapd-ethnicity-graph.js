import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { RadialChart } from 'react-vis';

const ScrapdEthinicityGraph = props => {
  // The data should come directly from the API.
  // const ethnicityData = [{ angle: 1, label: 'Black' }, { angle: 6, label: 'White' }, { angle: 3, label: 'Hispanic' }]
  // const ethnicityData = [{ angle: 1, radius: 10 }, { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20 }, { angle: 5, radius: 5, label: 'Alt Label' }, { angle: 3, radius: 14 }, { angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class' }];

  let datamap = new Object();
  for (var i = 0; i < props.fatalities.length; i++) {
    let ethnicity = props.fatalities[i]['Ethnicity'];
    if (datamap[ethnicity] === undefined) {
      datamap[ethnicity] = 1;
    } else {
      let ethnicitycount = datamap[ethnicity];
      datamap[ethnicity] = ethnicitycount + 1;
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
    textAlign: 'center'
  });

  const GraphTitle = styled.p({
    fontSize: '2em',
    textAlign: 'center'
  });

  return (
    <Graph>
      <RadialChart data={data} width={300} height={300} showLabels={true} labelsStyle={{ backgroundColor: 'gray' }} />
      <GraphTitle>Ethnicity distribution</GraphTitle>
    </Graph>
  );
};

ScrapdEthinicityGraph.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdEthinicityGraph);
