import ScrapdHomeSection from '../scrapd-home-section/component';
import ScrapdHero from '../scrapd-hero/component.js';

const ScrapdHomeView = () => {
  const intro = [
    <div key="0">
      <p>
        ScrAPD is a collection of tools that continuously and automatically collects traffic fatality information from
        the city of Austin, TX. The aggregated data is then made available for easy viewing in our ScrAPD dashboard.
      </p>
      <p>
        ScrAPD’s constantly updated dashboard makes it easy for individuals and organizations advocating towards a safer
        city to have access to the latest traffic fatality data.
      </p>
    </div>
  ];
  const viewData = [
    <div key="0">
      <p>
        In addition to our data sets, you can also view the data in a more visual way with clearly labeled charts and
        graphs.
      </p>
      <p>
        Review distributions by gender, ethnicity, age, and other categories with our easy-to-read data visualizations.
      </p>
    </div>
  ];
  // const howItWorks = [
  //   <div key="0">
  //     <p>Info about the tool</p>
  //     <p>Visit our documentation page on the ScrAPD scraper and try it yourself!</p>
  //   </div>
  // ];
  const grabData = [
    <div key="0">
      <p>
        The ScrAPD web scraper generates data sets which populate our ScrAPD dashboard. Use the “JSON” and “CSV” buttons
        by the date picker to download a data set for a specified timeframe in the selected format.
      </p>
      <p>
        The ScrAPD team is committed to transparency. You can find our data sets published on{' '}
        <a href="https://github.com/scrapd/datasets/tree/master/datasets" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        and{' '}
        <a href="https://data.world/remy-greinhofer/scrapd" target="_blank" rel="noopener noreferrer">
          Data.World.
        </a>{' '}
      </p>
    </div>
  ];
  const contribute = [
    <div key="0">
      <p>
        The ScrAPD ecosystem is Open Source and hosted in the{' '}
        <a href="https://github.com/scrapd">ScrAPD organization</a> on Github. We welcome curious, compassionate
        collaborators to make meaningful contributions to the project{' '}
      </p>
      {/* Maybe the below could be in a bulleted list */}
      <p>
        The general documentation is available <a href="https://docs.scrapd.org">here</a>.
      </p>
      <p>
        You can find the scraping tool we use to retrieve data at this{' '}
        <a href="https://github.com/scrapd/scrapd"> link</a>. and the source code for the dashboard{' '}
        <a href="https://github.com/scrapdviz/scrapdviz"> here</a>.
      </p>
      <p>
        ScrAPD is a project developed by volunteers, mostly from Open Austin, a local organization solving civic
        problems. You can learn more about it on their <a href="https://open-austin.org">website</a>.
      </p>
    </div>
  ];

  return (
    <div>
      <ScrapdHero
        title="ScrAPD"
        subtitle1="Visualize Austin traffic fatalities from another angle"
        // May delete subtitle 2
        subtitle2=""
        url="/static/images/photos/hero_image.png"
      />
      <ScrapdHomeSection title="What is ScrAPD?" text={intro} img={'/static/images/photos/scrapd_docs.jpg'} />
      <ScrapdHomeSection title="Data Sets" text={grabData} img={'/static/images/photos/data_world.jpg'} />
      <ScrapdHomeSection
        title="Visualizing the data"
        text={viewData}
        img={'/static/images/photos/scrapd_viz.jpg'}
        reverse
      />
      <ScrapdHomeSection
        title="Contributing"
        text={contribute}
        img={'/static/images/photos/scrapd_gh_org.jpg'}
        reverse
      />
    </div>
  );
};

export default ScrapdHomeView;
