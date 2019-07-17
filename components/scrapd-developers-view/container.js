import Proptypes from 'prop-types';
import ScrapdDeveloperView from './component';
import { connect } from 'react-redux';

const ScrapdDeveloperViewContainer = ({ developers }) => <ScrapdDeveloperView devData={developers} />;

ScrapdDeveloperViewContainer.propTypes = {
  developers: Proptypes.array
};

const mapStateToProps = state => {
  const { developers } = state;
  return { developers };
};

export default connect(mapStateToProps)(ScrapdDeveloperViewContainer);
