import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const HeroImage = styled.div(props => ({
  height: '500px',
  backgroundImage: 'url(' + props.url + ')',
  backgroundSize: '100%',
  backgroundPosition: '100% 70%'
}));

const Text = styled.div({
  position: 'relative',
  top: '40%'
});

const Title = styled.h1({
  fontSize: '10vh',
  width: 'auto',
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '0px'
});

const Subtitle = styled.h2({
  fontSize: '1em',
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold'
});

const ScrapdHero = props => {
  return (
    <HeroImage url={props.url}>
      <Text>
        <Title>{props.title}</Title>
        <Subtitle> {props.subtitle1}</Subtitle>
        <Subtitle> {props.subtitle2}</Subtitle>
      </Text>
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
