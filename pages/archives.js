import ScrapdCauseGraph from '../components/scrapd-cause-graph';
import ScrapdControlsContainer from '../components/scrapd-controls/container';
import ScrapdFatalityContainer from '../components/fatality-counter/container';
import ScrapdLayout from '../components/layout';
import ScrapdMonthGraph from '../components/scrapd-month-graph';
import ScrapdPieGraph from '../components/scrapd-pie-graph';
import ScrapdTimeGraph from '../components/scrapd-time-graph';
import ScrapdWeekdayGraph from '../components/scrapd-weekday-graph';
import ScrapdYearGraph from '../components/scrapd-year-graph';
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

const Archives = () => (
  <ScrapdLayout>
    <ScrapdControlsContainer />
    <GraphArea>
      <ScrapdYearGraph />
      <ScrapdMonthGraph />
      <ScrapdWeekdayGraph />
      <ScrapdTimeGraph />
      <ScrapdCauseGraph />
      <ScrapdPieGraph attribute="Type" />
      <ScrapdFatalityContainer />
      <ScrapdMap />
    </GraphArea>
  </ScrapdLayout>
);

export default connect()(Archives);
