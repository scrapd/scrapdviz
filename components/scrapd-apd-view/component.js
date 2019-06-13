import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import ScrapdAgeGraph from '../scrapd-age-graph/container';
import ScrapdFatality from '../fatality-counter/component';
import ScrapdMonthGraph from '../scrapd-month-graph/component';
import ScrapdNoDataAlert from '../scrapd-no-data-alert/component';
import ScrapdPieGraph from '../scrapd-pie-graph/component';
import ScrapdTimeGraph from '../scrapd-time-graph/component';
import ScrapdWeekdayGraph from '../scrapd-weekday-graph/component';
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

const ScrapdApdView = ({ fatalities }) => {
  return (
    <div>
      <ScrapdNoDataAlert count={fatalities.length} />
      <GraphArea>
        <ScrapdPieGraph fatalities={fatalities} attribute="Gender" />
        <ScrapdPieGraph fatalities={fatalities} attribute="Ethnicity" />
        <ScrapdAgeGraph fatalities={fatalities} />
        <ScrapdMonthGraph fatalities={fatalities} />
        <ScrapdWeekdayGraph fatalities={fatalities} />
        <ScrapdTimeGraph fatalities={fatalities} />
        <ScrapdFatality fatalities={fatalities} />
        <ScrapdMap fatalities={fatalities} />
      </GraphArea>
    </div>
  );
};

ScrapdApdView.propTypes = {
  fatalities: Proptypes.array
};

export default ScrapdApdView;
