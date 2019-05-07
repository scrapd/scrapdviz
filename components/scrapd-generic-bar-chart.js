import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { VictoryLabel, VictoryBar, VictoryChart, VictoryTheme } from 'victory';

const ScrapdGenericBarChart = props => {
  const groupedItems = props.groupedItems;
  const itemCount = props.itemCount;
  const attribute = props.attribute;

  let data = new Array();
  let legend = new Array();
  for (var key in groupedItems) {
    if (Number(groupedItems[key]) < 1) {
      continue;
    }
    data.push({ x: key, y: groupedItems[key], label: `${Number((groupedItems[key] * 100) / itemCount).toFixed(0)}%` });
    legend.push({ name: key });
  }

  const Graph = styled.div({
    display: 'inline-block',
    borderRadius: '5px',
    border: '1px solid',
    textAlign: 'center',
    margin: '2em 0'
  });

  const chartParams = {
    witdh: 400,
    height: 400,
    em: 16
  };

  return (
    <Graph>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
        width={chartParams.witdh}
        height={chartParams.height}
        padding={75}
      >
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: chartParams.em * 2 }}
          x={200}
          y={chartParams.em * 1.5}
          text={`${attribute} distribution`}
        />
        <VictoryBar horizontal style={{ data: { fill: '#c43a31' } }} data={data} />
      </VictoryChart>
    </Graph>
  );
};

ScrapdGenericBarChart.propTypes = {
  groupedItems: Proptypes.object,
  itemCount: Proptypes.number,
  attribute: Proptypes.string
};

export default ScrapdGenericBarChart;
