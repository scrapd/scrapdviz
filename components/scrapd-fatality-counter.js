import Proptypes from 'prop-types';
import facepaint from 'facepaint';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

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
      order: ['-1', '0']
    })
  );

  const CountStyle = styled.div({
    display: 'flex',
    height: '400px',
    width: '400px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fatalityCount > 99 ? '12rem' : '16rem'
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
  fatalities: Proptypes.array
};

const mapStateToProps = state => {
  const { fatalities } = state;
  return { fatalities };
};

export default connect(mapStateToProps)(ScrapdFatalityCounter);
