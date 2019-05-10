import PropTypes from 'prop-types';
import facepaint from 'facepaint';
import styled from '@emotion/styled';

// Define responsive options.
const breakpoints = [1048];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const ScrapdFatalityCounter = props => {
  const fatalityCount = props.fatalities.length;

  const CounterDiv = styled.div(
    mq({
      display: 'inline-block',
      borderRadius: '5px',
      border: '1px solid',
      textAlign: 'center',
      margin: '2em 0',
      order: ['-1', '0'],
      height: '400px'
    })
  );

  const CountStyle = styled.div({
    display: 'flex',
    width: '400px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14rem'
  });

  const GraphTitle = styled.p({
    fontSize: '2em',
    textAlign: 'center'
  });

  return (
    <CounterDiv>
      <CountStyle>{fatalityCount}</CountStyle>
      <GraphTitle>Fatalities</GraphTitle>
    </CounterDiv>
  );
};

ScrapdFatalityCounter.propTypes = {
  fatalities: PropTypes.array.isRequired
};

export default ScrapdFatalityCounter;
