import Proptypes from 'prop-types';
import ScrapdPieGraph from './component';
import { connect } from 'react-redux';

const ScrapdPieGraphContainer = ({ fatalities, attribute }) => (
  <ScrapdPieGraph fatalities={fatalities} attribute={attribute} />
);

ScrapdPieGraphContainer.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdPieGraphContainer);
