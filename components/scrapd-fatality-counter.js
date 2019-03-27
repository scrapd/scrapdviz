import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

const ScrapdFatalityCounter = props => {
  const fatalityCount = props.fatalities.length;

  const CounterDiv = styled.div({
    display: 'inline-block',
    borderRadius: '5px',
    border: '1px solid',
    textAlign: 'center',
    margin: '2em 0'
  });

  const CountStyle = styled.div({
    display: 'flex',
    height: '300px',
    width: '300px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16rem'
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
