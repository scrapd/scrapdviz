import Proptypes from 'prop-types';
import ScrapdMonthGraph from './component';
import { connect } from 'react-redux';

const ScrapdMonthGraphContainer = ({ fatalities }) => <ScrapdMonthGraph fatalities={fatalities} />;

ScrapdMonthGraphContainer.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdMonthGraphContainer);
