import PropTypes from 'prop-types';

const heroImage = {
  height: '500px',
  'background-image': 'url("https://res.cloudinary.com/ab91/image/upload/v1567305230/scrAPD%20Viz/hero_image.png")',
  'background-size': 'cover'
};

const text = {
  position: 'relative',
  top: '40%'
};

const titleStyle = {
  'font-size': '10vh',
  width: 'auto',
  'text-align': 'center',
  color: 'white',
  'font-weight': 'bold',
  'margin-bottom': '0px'
};

const subtitleStyle = {
  'font-size': '3vh',
  'text-align': 'center',
  color: 'white',
  'font-weight': 'bold'
};

const ScrapdHero = props => {
  return (
    <div>
      <div style={heroImage}>
        <div style={text}>
          <h1 style={titleStyle}>{props.title}</h1>
          <h3 style={subtitleStyle}>{props.subtitle1}</h3>
          <h3 style={subtitleStyle}>{props.subtitle2}</h3>
        </div>
      </div>
    </div>
  );
};

ScrapdHero.propTypes = {
  title: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string
};
export default ScrapdHero;
