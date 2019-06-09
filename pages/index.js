import ScrapdAgeGraph from '../components/scrapd-age-graph';
import ScrapdControlsContainer from '../components/scrapd-controls/container';
import ScrapdFatalityContainer from '../components/fatality-counter/container';
import ScrapdGrid from '../components/scrapd-grid';
import ScrapdLayout from '../components/layout';
import ScrapdMonthGraph from '../components/scrapd-month-graph';
import ScrapdPieGraph from '../components/scrapd-pie-graph';
import ScrapdTimeGraph from '../components/scrapd-time-graph';
import ScrapdWeekdayGraph from '../components/scrapd-weekday-graph';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

const ScrapdMap = dynamic(() => import('../components/scrapd-map'), {
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
    <ScrapdGrid />
    <GraphArea>
      <ScrapdPieGraph attribute="Gender" />
      <ScrapdPieGraph attribute="Ethnicity" />
      <ScrapdAgeGraph />
      <ScrapdMonthGraph />
      <ScrapdWeekdayGraph />
      <ScrapdTimeGraph />
      <ScrapdFatalityContainer />
      <ScrapdMap />
    </GraphArea>
  </ScrapdLayout>
);

export default connect()(Index);
