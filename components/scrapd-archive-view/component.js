import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import ScrapdCauseGraph from '../scrapd-cause-graph/component';
import ScrapdFatality from '../fatality-counter/component';
import ScrapdMonthGraph from '../scrapd-month-graph/component';
import ScrapdNoDataAlert from '../scrapd-no-data-alert/component';
import ScrapdPieGraph from '../scrapd-pie-graph/component';
import ScrapdTimeGraph from '../scrapd-time-graph/component';
import ScrapdWeekdayGraph from '../scrapd-weekday-graph/component';
import ScrapdYearGraph from '../scrapd-year-graph/component';
import dynamic from 'next/dynamic';

const ScrapdMap = dynamic(() => import('../scrapd-map/component'), {
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

const ScrapdArchiveView = ({ fatalities }) => {
  return (
    <div>
      <ScrapdNoDataAlert count={fatalities.length} />
      <GraphArea>
        <ScrapdYearGraph fatalities={fatalities} />
        <ScrapdMonthGraph fatalities={fatalities} />
        <ScrapdWeekdayGraph fatalities={fatalities} />
        <ScrapdTimeGraph fatalities={fatalities} />
        <ScrapdCauseGraph fatalities={fatalities} />
        <ScrapdPieGraph fatalities={fatalities} attribute="type" />
        <ScrapdFatality fatalities={fatalities} />
        <ScrapdMap fatalities={fatalities} />
      </GraphArea>
    </div>
  );
};

ScrapdArchiveView.propTypes = {
  fatalities: Proptypes.array
};

export default ScrapdArchiveView;
