import Proptypes from 'prop-types';
import ScrapdWeekdayGraph from './component';
import { connect } from 'react-redux';

const ScrapdWeekdayGraphContainer = ({ fatalities }) => <ScrapdWeekdayGraph fatalities={fatalities} />;

ScrapdWeekdayGraphContainer.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdWeekdayGraphContainer);
