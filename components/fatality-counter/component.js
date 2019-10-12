import PropTypes from 'prop-types';
import facepaint from 'facepaint';
import styled from '@emotion/styled';

// Define responsive options.
const breakpoints = [1048];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const ScrapdFatalityCounter = props => {
  const fatalityCount = props.fatalities.length;

  let casesArray = new Array() 
  for (var i = 0; i < props.fatalities.length; i++) {
      casesArray.push(props.fatalities[i].case);
  };
    
  let caseCount = [...new Set(casesArray)].length;

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
    fontSize: '4.5rem'
  });

  const GraphTitle = styled.p({
    fontSize: '2.5em',
    textAlign: 'center'
  });

  return (
    <CounterDiv>
      <CountStyle>{fatalityCount}</CountStyle>
      <GraphTitle>Fatalities</GraphTitle>
      <CountStyle>{caseCount}</CountStyle>
      <GraphTitle>Crashes</GraphTitle>
    </CounterDiv>
  );
};

ScrapdFatalityCounter.propTypes = {
  fatalities: PropTypes.array.isRequired
};

export default ScrapdFatalityCounter;
