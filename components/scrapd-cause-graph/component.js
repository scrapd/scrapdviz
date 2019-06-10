import Proptypes from 'prop-types';
import ScrapdGenericPieChart from '../scrapd-generic-pie-chart/component';

const ScrapdCauseGraph = props => {
  let datamap = new Object();
  datamap['Impairment'] = 0;
  datamap['Ran light/stop'] = 0;
  datamap['Speeding'] = 0;
  datamap['Other'] = 0;
  let total = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    const impairment = props.fatalities[i]['Impairment'];
    const ranLightOrStop = props.fatalities[i]['Ran light/stop'];
    const speeding = props.fatalities[i]['Speeding'];
    const impaired = impairment && impairment != 'none';
    const failedToStop = ranLightOrStop && ranLightOrStop != 'n';
    const sped = speeding && speeding != 'n';

    if (impaired) {
      datamap['Impairment'] = datamap['Impairment'] + 1;
      total = total + 1;
    }
    if (failedToStop) {
      datamap['Ran light/stop'] = datamap['Ran light/stop'] + 1;
      total = total + 1;
    }
    if (sped) {
      datamap['Speeding'] = datamap['Speeding'] + 1;
      total = total + 1;
    }
    if (!impaired && !failedToStop && !sped) {
      datamap['Other'] = datamap['Other'] + 1;
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
