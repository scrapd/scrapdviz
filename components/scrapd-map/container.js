import Proptypes from 'prop-types';
import ScrapdMap from './component';
import { connect } from 'react-redux';

const ScrapdMapContainer = ({ fatalities }) => <ScrapdMap fatalities={fatalities} />;

ScrapdMapContainer.propTypes = {
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdMapContainer);
