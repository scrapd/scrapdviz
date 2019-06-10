import PropTypes from 'prop-types';
import ScrapdGrid from './component';
import { connect } from 'react-redux';

const ScrapdGridContainer = ({ fatalities }) => <ScrapdGrid fatalities={fatalities} />;

ScrapdGridContainer.propTypes = {
  date_filter: PropTypes.object,
  fatalities: PropTypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdGridContainer);
