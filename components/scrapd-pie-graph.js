import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { RadialChart } from 'react-vis';

const ScrapdPieGraph = props => {
  let datamap = new Object();
  for (var i = 0; i < props.fatalities.length; i++) {
    let attr = props.fatalities[i][props.attribute];
    if (datamap[attr] === undefined) {
      datamap[attr] = 1;
    } else {
      let attrCount = datamap[attr];
      datamap[attr] = attrCount + 1;
    }
  }

  let data = new Array();
  for (var key in datamap) {
    let tmp = new Object();
    tmp.angle = datamap[key];
    tmp.label = key;
    tmp.subLabel = Number((datamap[key] * 100) / props.fatalities.length).toFixed(0) + '%';
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
      <RadialChart
        data={data}
        width={300}
        height={300}
        showLabels={true}
        labelsStyle={{ backgroundColor: 'gray', color: 'yellow' }}
        labelsRadiusMultiplier={1}
      />
      <GraphTitle>{props.attribute} distribution</GraphTitle>
    </Graph>
  );
};

ScrapdPieGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdPieGraph);
