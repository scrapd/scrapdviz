import Proptypes from 'prop-types';
import ScrapdGenericPieChart from './scrapd-generic-pie-chart';
import { connect } from 'react-redux';

const ScrapdCauseGraph = props => {
  // The data should come directly from the API.
  let datamap = new Object();
  datamap['Impairment'] = 0;
  datamap['Ran light/stop'] = 0;
  datamap['Speeding'] = 0;
  datamap['Other'] = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    const impairment = props.fatalities[i]['Impairment'];
    const ranLightOrStop = props.fatalities[i]['Ran light/stop'];
    const speeding = props.fatalities[i]['Speeding'];
    if (impairment && impairment != 'none') {
      datamap['Impairment'] = datamap['Impairment'] + 1;
    } else if (ranLightOrStop && ranLightOrStop != 'n') {
      datamap['Ran light/stop'] = datamap['Ran light/stop'] + 1;
    } else if (speeding && speeding != 'n') {
      datamap['Speeding'] = datamap['Speeding'] + 1;
    } else {
      datamap['Other'] = datamap['Other'] + 1;
    }
  }

  return <ScrapdGenericPieChart groupedItems={datamap} itemCount={props.fatalities.length} attribute="Cause" />;
};

ScrapdCauseGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdCauseGraph);
