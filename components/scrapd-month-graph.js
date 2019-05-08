import Proptypes from 'prop-types';
import ScrapdGenericBarChart from './scrapd-generic-bar-chart';
import moment from 'moment';
import { connect } from 'react-redux';

const ScrapdMonthGraph = props => {
  // The data should come directly from the API.
  let datamap = new Object();
  datamap['January'] = 0;
  datamap['February'] = 0;
  datamap['March'] = 0;
  datamap['April'] = 0;
  datamap['May'] = 0;
  datamap['June'] = 0;
  datamap['July'] = 0;
  datamap['August'] = 0;
  datamap['September'] = 0;
  datamap['October'] = 0;
  datamap['November'] = 0;
  datamap['December'] = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    const date = props.fatalities[i]['Date'];
    const month = moment(date, ['MM/DD/YYYY']).month();
    const monthsOfYear = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const monthOfYear = monthsOfYear[month];
    if (monthOfYear == undefined) {
      console.log(month);
      console.log(props.fatalities[i]);
    }
    datamap[monthOfYear] = datamap[monthOfYear] + 1;
  }

  return <ScrapdGenericBarChart groupedItems={datamap} itemCount={props.fatalities.length} attribute="Month" />;
};

ScrapdMonthGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdMonthGraph);
