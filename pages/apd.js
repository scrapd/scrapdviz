import ScrapdControlsContainer from '../components/scrapd-controls/container';
import ScrapdLayout from '../components/scrapd-layout';
import ScrapdApdViewContainer from '../components/scrapd-apd-view/container';
import { connect } from 'react-redux';

const Index = () => (
  <ScrapdLayout>
    <ScrapdControlsContainer />
    <ScrapdApdViewContainer />
  </ScrapdLayout>
);

export default connect()(Index);
