import ScrapdControlsContainer from '../components/scrapd-controls/container';
import ScrapdLayout from '../components/scrapd-layout';
import ScrapdApdViewContainer from '../components/scrapd-archive-view/container';
import { connect } from 'react-redux';

const Archives = () => (
  <ScrapdLayout>
    <ScrapdControlsContainer />
    <ScrapdApdViewContainer />
  </ScrapdLayout>
);

export default connect()(Archives);
