import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ScrapdGenericPieChart from './scrapd-generic-pie-chart';
import moment from 'moment';

const ScrapdTimeGraph = props => {
  // The data should come directly from the API.
  let datamap = new Object();
  datamap['631a-930a'] = 0;
  datamap['931a-400p'] = 0;
  datamap['401p-700p'] = 0;
  datamap['701p-1000p'] = 0;
  datamap['1001p-630a'] = 0;
  datamap['undefined'] = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    const time = props.fatalities[i]['Time'];
    const parsedTime = moment(time, ['h:m a']);
    if (parsedTime.isBetween(moment('00:00 a', ['h:m a']), moment('6:30 a', ['h:ma']), null, '[]')) {
      let timeCount = datamap['1001p-630a'];
      datamap['1001p-630a'] = timeCount + 1;
    } else if (parsedTime.isBetween(moment('06:31 a', ['h:m a']), moment('9:30 a', ['h:ma']), null, '[]')) {
      let timeCount = datamap['631a-930a'];
      datamap['631a-930a'] = timeCount + 1;
    } else if (parsedTime.isBetween(moment('09:31 a', ['h:m a']), moment('4:00 p', ['h:ma']), null, '[]')) {
      let timeCount = datamap['931a-400p'];
      datamap['931a-400p'] = timeCount + 1;
    } else if (parsedTime.isBetween(moment('04:01 p', ['h:m a']), moment('7:00 p', ['h:ma']), null, '[]')) {
      let timeCount = datamap['401p-700p'];
      datamap['401p-700p'] = timeCount + 1;
    } else if (parsedTime.isBetween(moment('07:01 p', ['h:m a']), moment('10:00 p', ['h:ma']), null, '[]')) {
      let timeCount = datamap['701p-1000p'];
      datamap['701p-1000p'] = timeCount + 1;
    } else if (parsedTime.isBetween(moment('10:01 p', ['h:m a']), moment('11:59 p', ['h:ma']), null, '[]')) {
      let timeCount = datamap['1001p-630a'];
      datamap['1001p-630a'] = timeCount + 1;
    } else {
      // THIS SHOULD NEVER HAPPEN!
      let timeCount = datamap['undefined'];
      datamap['undefined'] = timeCount + 1;
      console.log('Invalid entry:');
      console.log(props.fatalities[i]);
    }
  }

  return <ScrapdGenericPieChart groupedItems={datamap} itemCount={props.fatalities.length} attribute="Time" />;
};

ScrapdTimeGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdTimeGraph);
