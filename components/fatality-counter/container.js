import PropTypes from 'prop-types';
import ScrapdFatalityCounter from './component';
import { connect } from 'react-redux';

const ScrapdFatalityContainer = ({ fatalities }) => <ScrapdFatalityCounter fatalities={fatalities} />;

ScrapdFatalityContainer.propTypes = {
  fatalities: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdFatalityContainer);
