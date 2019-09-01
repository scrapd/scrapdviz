import ScrapdLayout from '../components/scrapd-layout';
import ScrapdHomeViewContainer from '../components/scrapd-home-view/container';
import { connect } from 'react-redux';

const Home = () => (
  <ScrapdLayout>
    <ScrapdHomeViewContainer />
  </ScrapdLayout>
);

export default connect()(Home);
