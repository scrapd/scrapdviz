import Proptypes from 'prop-types';
import ScrapdYearGraph from './component';
import { connect } from 'react-redux';

const ScrapdYearGraphContainer = ({ fatalities }) => <ScrapdYearGraph fatalities={fatalities} />;

ScrapdYearGraphContainer.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdYearGraphContainer);
