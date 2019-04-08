import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { VictoryContainer, VictoryLabel, VictoryLegend, VictoryPie } from 'victory';

const ScrapdGenericPieChart = props => {
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
      <VictoryContainer width={chartParams.witdh} height={chartParams.height}>
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: chartParams.em * 2 }}
          x={200}
          y={chartParams.em * 1.5}
          text={`${attribute} distribution`}
        />
        <VictoryPie
          standalone={false}
          colorScale="qualitative"
          data={data}
          labelRadius={90}
          style={{ labels: { fill: 'white', fontSize: '1em', fontWeight: 'bold' } }}
          padding={{ left: 100, bottom: 0, top: 0, right: chartParams.em * 1 }}
        />

        <VictoryLegend
          y={Number((chartParams.height - legend.length * 2 * chartParams.em * 0.95) / 2)}
          standalone={false}
          colorScale="qualitative"
          orientation="vertical"
          data={legend}
        />
      </VictoryContainer>
    </Graph>
  );
};

ScrapdGenericPieChart.propTypes = {
  groupedItems: Proptypes.object,
  itemCount: Proptypes.number,
  attribute: Proptypes.string
};

export default ScrapdGenericPieChart;
