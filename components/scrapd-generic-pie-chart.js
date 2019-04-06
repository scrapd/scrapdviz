import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { RadialChart } from 'react-vis';

const ScrapdGenericPieChart = props => {
  const groupedItems = props.groupedItems;
  const itemCount = props.itemCount;
  const attribute = props.attribute;

  let data = new Array();
  for (var key in groupedItems) {
    if (Number(groupedItems[key]) < 1) {
      continue;
    }
    let tmp = new Object();
    tmp.angle = groupedItems[key];
    tmp.label = key;
    tmp.subLabel = Number((groupedItems[key] * 100) / itemCount).toFixed(0) + '%';
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
      <GraphTitle>{attribute} distribution</GraphTitle>
    </Graph>
  );
};

ScrapdGenericPieChart.propTypes = {
  groupedItems: Proptypes.object,
  itemCount: Proptypes.number,
  attribute: Proptypes.string
};

export default ScrapdGenericPieChart;
