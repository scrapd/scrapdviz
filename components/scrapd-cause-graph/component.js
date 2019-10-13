import Proptypes from 'prop-types';
import ScrapdGenericPieChart from '../scrapd-generic-pie-chart/component';

const ScrapdCauseGraph = props => {
  let datamap = new Object();
  datamap['impairment'] = 0;
  datamap['ran light/stop'] = 0;
  datamap['speeding'] = 0;
  datamap['other'] = 0;
  let total = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    const impairment = props.fatalities[i]['impairment'];
    const ranLightOrStop = props.fatalities[i]['ran light/stop'];
    const speeding = props.fatalities[i]['speeding'];
    const impaired = impairment && impairment != 'none';
    const failedToStop = ranLightOrStop && ranLightOrStop != 'n';
    const sped = speeding && speeding != 'n';

    if (impaired) {
      datamap['impairment'] = datamap['impairment'] + 1;
      total = total + 1;
    }
    if (failedToStop) {
      datamap['ran light/stop'] = datamap['ran light/stop'] + 1;
      total = total + 1;
    }
    if (sped) {
      datamap['speeding'] = datamap['speeding'] + 1;
      total = total + 1;
    }
    if (!impaired && !failedToStop && !sped) {
      datamap['other'] = datamap['other'] + 1;
      total = total + 1;
    }
  }

  return <ScrapdGenericPieChart groupedItems={datamap} itemCount={total} attribute="Cause" />;
};

ScrapdCauseGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

export default ScrapdCauseGraph;
