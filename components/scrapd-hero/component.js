import PropTypes from 'prop-types';
import facepaint from 'facepaint';
import styled from '@emotion/styled';

const breakpoints = [425, 768];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const HeroImage = styled.div(props =>
  mq({
    height: ['400px', '500px'],
    backgroundImage: 'url(' + props.url + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    backgroundRepeat: 'no-repeat'
  })
);

const Text = styled('div')`
  ${mq({
    position: 'relative',
    top: ['35%', '40%']
  })};
`;

const Title = styled.h1({
  fontSize: '10vh',
  width: 'auto',
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '0px'
});

const Subtitle = styled('h2')`
  ${mq({
    fontSize: ['1.1em', '1.3em'],
    textAlign: 'center',
    color: 'white',
    paddingRight: '5%',
    paddingLeft: '5%',
    fontWeight: 'bold'
  })};
`;

const CreditStyle = {
  fontSize: '.9em',
  fontWeight: 'bold',
  fontStyle: 'italic',
  lineHeight: '0',
  color: 'white',
  position: 'absolute',
  right: '15px',
  bottom: '0'
};

const ScrapdHero = props => {
  return (
    <HeroImage url={props.url}>
      <Text>
        <Title>{props.title}</Title>
        <Subtitle> {props.subtitle1}</Subtitle>
        <Subtitle> {props.subtitle2}</Subtitle>
      </Text>
      <p style={CreditStyle}>
        Photo by Gunawan Kartapranata, under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="noopener noreferrer" target="_blank">
          CC license
        </a>
      </p>
    </HeroImage>
  );
};

ScrapdHero.propTypes = {
  title: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  url: PropTypes.string
};

export default ScrapdHero;
