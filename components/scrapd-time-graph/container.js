import Proptypes from 'prop-types';
import ScrapdTimeGraph from './component';
import { connect } from 'react-redux';

const ScrapdTimeGraphContainer = ({ fatalities }) => <ScrapdTimeGraph fatalities={fatalities} />;

ScrapdTimeGraphContainer.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdTimeGraphContainer);
