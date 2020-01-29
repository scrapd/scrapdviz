import PropTypes from 'prop-types';
import facepaint from 'facepaint';
import styled from '@emotion/styled';

const breakpoints = [425, 768];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

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

  const SectionTitleSpan = styled('span')`
    ${mq({
      backgroundColor: 'white',
      fontSize: ['2em', '2.75em'],
      fontWeight: 'bold',
      color: '#003CFF',
      padding: '0px 15px'
    })};
  `;

  const Content = styled.div(props => ({
    display: 'flex',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    padding: '1em'
  }));

  const Text = styled('div')`
    ${mq({
      maxWidth: ['99%', '80%'],
      minWidth: ['99%', '80%'],
      fontSize: ['1em', '1.6em'],
      paddingTop: ['0px']
    })};
  `;

  const Image = styled.img({
    maxWidth: '100%',
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
