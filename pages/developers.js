import ScrapdControlsContainer from '../components/scrapd-controls/container';
import ScrapdLayout from '../components/scrapd-layout';
import ScrapdApdViewContainer from '../components/scrapd-developers-view/container';
import { connect } from 'react-redux';

const Developers = () => (
  <ScrapdLayout>
      <ScrapdApdViewContainer />
  </ScrapdLayout>
);

export default connect()(Developers);
