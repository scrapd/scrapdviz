import Proptypes from 'prop-types';
import ScrapdArchiveView from './component';
import { connect } from 'react-redux';

const ScrapdArchiveViewContainer = ({ archives }) => <ScrapdArchiveView fatalities={archives} />;

ScrapdArchiveViewContainer.propTypes = {
  archives: Proptypes.array
};

const mapStateToProps = state => {
  const { archives } = state;
  return { archives };
};

export default connect(mapStateToProps)(ScrapdArchiveViewContainer);
