import Proptypes from 'prop-types';
import ScrapdHomeView from './component';
import { connect } from 'react-redux';

const ScrapdHomeViewContainer = ({ developers }) => <ScrapdHomeView devData={developers} />;

ScrapdHomeViewContainer.propTypes = {
  developers: Proptypes.array
};

const mapStateToProps = state => {
  const { developers } = state;
  return { developers };
};

export default connect(mapStateToProps)(ScrapdHomeViewContainer);
