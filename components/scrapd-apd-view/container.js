import Proptypes from 'prop-types';
import ScrapdApdView from './component';
import { connect } from 'react-redux';

const ScrapdApdViewContainer = ({ fatalities }) => <ScrapdApdView fatalities={fatalities} />;

ScrapdApdViewContainer.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdApdViewContainer);
