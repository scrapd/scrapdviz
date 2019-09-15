import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ScrapdHomeSection = props => {
  const Section = styled.div({
    border: 'medium solid gray',
    borderRadius: '20px',
    margin: '3em 0'
  });

  const SectionTitle = styled.div({
    transform: 'translate(0, -50%)',
    textAlign: 'center'
  });

  const SectionTitleSpan = styled.span({
    backgroundColor: 'white',
    padding: '10px',
    fontSize: '2.75em',
    fontWeight: 'bold',
    color: '#003CFF'
  });

  const Content = styled.div(props => ({
    display: 'flex',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    padding: '1em'
  }));

  const Text = styled.div({
    maxWidth: '75%',
    minWidth: '75%'
  });

  const Image = styled.img({
    maxWidth: '300%',
    maxHeight: '300px'
  });

  return (
    <Section>
      <SectionTitle>
        <SectionTitleSpan>{props.title}</SectionTitleSpan>
      </SectionTitle>
      <Content reverse={props.reverse}>
        <Text>{props.text}</Text>
        <Image src={props.img} />
      </Content>
    </Section>
  );
};

ScrapdHomeSection.propTypes = {
  img: PropTypes.string,
  reverse: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.array
};

export default ScrapdHomeSection;
