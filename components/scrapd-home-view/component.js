const headerStyle = {
  height: '80vh',
  'background-image': 'url("https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/177348.jpg")'
};

const titleStyle = {
  'background-color': '#1890ff',
  'font-size': '10vh',
  width: 'auto',
  'text-align': 'center'
};

const positionStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -10%)',
  position: 'absolute',
  width: '100%'
};
const subtitleStyle = {
  ...titleStyle,
  'font-size': '3vh',
  padding: '5px'
};

const smallSubtitleStyle = {
  ...subtitleStyle,
  'font-size': '2.5vh'
};

const hstyle = {
  'text-align': 'center'
};

const sectionStyle = {
  border: 'medium solid gray',
  'border-radius': '20px'
};

const sectionTitle = {
  'text-align': 'center',
  transform: 'translate(0, -50%)'
};

const sectionTitleStyle = {
  'background-color': 'white',
  padding: '10px'
};

const contributionSection = {
  padding: '30px',
  'padding-top': '5px'
};

const section = {
  width: '75%',
  display: 'inline-block',
  paddingLeft: '5%',
  float: 'bottom',
  overflow: 'hidden',
  verticalAlign: 'middle'
};

const ScrapdHomeView = () => {
  return (
    <div>
      <div style={headerStyle}>
        <div style={positionStyle}>
          <h1 style={hstyle}>
            <span style={titleStyle}>ScrAPD</span>
          </h1>
          <h2 style={hstyle}>
            <span style={subtitleStyle}>Safety data, collected automatically for you</span>
          </h2>
          <h3 style={hstyle}>
            <span style={smallSubtitleStyle}>
              ScrAPD scrapes the web for traffic fatality data, making it accessible to all
            </span>
          </h3>
        </div>
      </div>
      &nbsp;
      <div style={sectionStyle}>
        <h1 style={sectionTitle}>
          <span style={sectionTitleStyle}>What is ScrAPD?</span>
        </h1>
        <div style={contributionSection}>
          <div style={section}>
            <h3>
              ScrAPD is a collection of tools to automatically collect information about traffic fatalities in the city
              of Austin, TX and render it on a modern dashboard.
            </h3>
            &nbsp;
            <h3>
              Visit our documentation page to learn more about what ScrAPD does, how it works, and who it&#39;s helping
              today.
            </h3>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png"
            width="25%"
          />
        </div>
      </div>
      &nbsp;
      <div style={sectionStyle}>
        <h1 style={sectionTitle}>
          <span style={sectionTitleStyle}>How do I view the data?</span>
        </h1>
        <div style={contributionSection}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png"
            width="25%"
          />
          <div style={section}>
            <h3>Spreadsheets can be difficult to understand. ScrAPDViz solves this problem.</h3>
            &nbsp;
            <h3>
              Charts, graphs, and other data visualizations help ScrAPDViz simplify large datasets into a format anyone
              can understand.
            </h3>
          </div>
        </div>
      </div>
      &nbsp;
      <div style={sectionStyle}>
        <h1 style={sectionTitle}>
          <span style={sectionTitleStyle}>How does ScrAPD work?</span>
        </h1>
        <div style={contributionSection}>
          <div style={section}>
            <h3>[Info about the tool]</h3>
            &nbsp;
            <h3>Visit our documentation page on the ScrAPD scraper and try it yourself!</h3>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png"
            width="25%"
          />
        </div>
      </div>
      &nbsp;
      <div style={sectionStyle}>
        <h1 style={sectionTitle}>
          <span style={sectionTitleStyle}>How do I grab ALL the data?</span>
        </h1>
        <div style={contributionSection}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png"
            width="25%"
          />
          <div style={section}>
            <h3>[Info about the data.world]</h3>
            &nbsp;
            <h3>[more]</h3>
          </div>
        </div>
      </div>
      &nbsp;
      <div style={sectionStyle}>
        <h1 style={sectionTitle}>
          <span style={sectionTitleStyle}>What if I want to contribute?</span>
        </h1>
        <div style={contributionSection}>
          <div style={section}>
            <h3>
              Scrapd has documentation available at this link: <a href="https://docs.scrapd.org">Docs</a>.
            </h3>
            <h3>
              Scrapd is open-source. You can find the scraping tool we use to retrieve data at this link:
              <a href="https://github.com/scrapd/scrapd">Scraper Source</a>.
            </h3>
            <h1>
              You can also find the source code for this site at this link:
              <a href="https://github.com/scrapdviz/scrapdviz">Visualization Source</a>.
            </h1>
            <h3>
              ScrAPD is a project of Open Austin, a Code for America brigade. You can find more data about the
              organization at this link: <a href="https://open-austin.org">Open Austin</a>.
            </h3>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png"
            width="25%"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrapdHomeView;
