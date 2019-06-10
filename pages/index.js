import ScrapdAgeGraph from '../components/scrapd-age-graph/container';
import ScrapdControlsContainer from '../components/scrapd-controls/container';
import ScrapdFatalityContainer from '../components/fatality-counter/container';
import ScrapdGridContainer from '../components/scrapd-grid/container';
import ScrapdLayout from '../components/scrapd-layout';
import ScrapdMonthGraphContainer from '../components/scrapd-month-graph/container';
import ScrapdPieGraphContainer from '../components/scrapd-pie-graph/container';
import ScrapdTimeGraphContainer from '../components/scrapd-time-graph/container';
import ScrapdWeekdayGraphContainer from '../components/scrapd-weekday-graph/container';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

const ScrapdMap = dynamic(() => import('../components/scrapd-map/container'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const GraphArea = styled.div({
  display: 'inline-flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around'
});

const Index = () => (
  <ScrapdLayout>
    <ScrapdControlsContainer />
    <ScrapdGridContainer />
    <GraphArea>
      <ScrapdPieGraphContainer attribute="Gender" />
      <ScrapdPieGraphContainer attribute="Ethnicity" />
      <ScrapdAgeGraph />
      <ScrapdMonthGraphContainer />
      <ScrapdWeekdayGraphContainer />
      <ScrapdTimeGraphContainer />
      <ScrapdFatalityContainer />
      <ScrapdMap />
    </GraphArea>
  </ScrapdLayout>
);

export default connect()(Index);
