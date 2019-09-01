import ScrapdHomeSection from '../scrapd-home-section/component';
import ScrapdHero from '../scrapd-hero/component.js';
<<<<<<< HEAD
=======

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
>>>>>>> Add Hero Component

const ScrapdHomeView = () => {
  const intro = [
    <p key="0">
      ScrAPD is a collection of tools to automatically collect information about traffic fatalities in the city of
      Austin, TX and render it on a modern dashboard.
    </p>,
    <p key="1">
      Visit our documentation page to learn more about what ScrAPD does, how it works, and who it is helping today.
    </p>
  ];
  const viewData = [
    <p key="0">Spreadsheets can be difficult to understand. ScrAPDViz solves this problem.</p>,
    <p key="1">
      Charts, graphs, and other data visualizations help ScrAPDViz simplify large datasets into a format anyone can
      understand.
    </p>
  ];
  const howItWorks = [
    <p key="0">Info about the tool</p>,
    <p key="1">Visit our documentation page on the ScrAPD scraper and try it yourself!</p>
  ];
  const grabData = [<p key="0">[Info about the data.world]</p>, <p key="1">[more]</p>];
  const contribute = [
    <p key="0">
      Scrapd has documentation available at this link: <a href="https://docs.scrapd.org">Docs</a>.
    </p>,
    <p key="1">
      Scrapd is open-source. You can find the scraping tool we use to retrieve data at this link:
      <a href="https://github.com/scrapd/scrapd">Scraper Source</a>.
    </p>,
    <p key="2">
      You can also find the source code for this site at this link:
      <a href="https://github.com/scrapdviz/scrapdviz">Visualization Source</a>.
    </p>,
    <p key="3">
      ScrAPD is a project of Open Austin, a Code for America brigade. You can find more data about the organization at
      this link: <a href="https://open-austin.org">Open Austin</a>.
    </p>
  ];

  return (
    <div>
<<<<<<< HEAD
      <ScrapdHero
        title="scrAPD"
        subtitle1="Safety data, collected automatically for you"
        subtitle2="ScrAPD scrapes the web for traffic fatality data, making it accessible to all"
      />
=======
        <ScrapdHero title="scrAPD" subtitle1="Safety data, collected automatically for you" subtitle2="ScrAPD scrapes the web for traffic fatality data, making it accessible to all"/>
>>>>>>> Add Hero Component
      <ScrapdHomeSection
        title="What is ScrAPD?"
        text={intro}
        img={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png'
        }
      />
      <ScrapdHomeSection
        title="How do I view the data?"
        text={viewData}
        img={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png'
        }
        reverse
      />
      <ScrapdHomeSection
        title="How does ScrAPD work?"
        text={howItWorks}
        img={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png'
        }
      />
      <ScrapdHomeSection
        title="How do I grab ALL the data?"
        text={grabData}
        img={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png'
        }
        reverse
      />
      <ScrapdHomeSection
        title="What if I want to contribute?"
        text={contribute}
        img={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Square_on_plane.svg/1024px-Square_on_plane.svg.png'
        }
      />
    </div>
  );
};

export default ScrapdHomeView;
