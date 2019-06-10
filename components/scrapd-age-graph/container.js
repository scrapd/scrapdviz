import Proptypes from 'prop-types';
import ScrapdAgeGraph from './component';
import { connect } from 'react-redux';

const ScrapdAgeGraphContainer = ({ fatalities }) => <ScrapdAgeGraph fatalities={fatalities} />;

ScrapdAgeGraphContainer.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdAgeGraphContainer);
