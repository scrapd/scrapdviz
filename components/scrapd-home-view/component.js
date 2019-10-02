import ScrapdHomeSection from '../scrapd-home-section/component';
import ScrapdHero from '../scrapd-hero/component.js';

const ScrapdHomeView = () => {
  const intro = [
    <div key="0">
      <p>
        ScrAPD is a collection of tools to automatically collect information about traffic fatalities in the city of
        Austin, TX and render it on a modern dashboard.
      </p>
      <p>
        ScrAPD provides information to help understand traffic fatality patterns and empower decision makers to
        implement solutions to prevent them.
      </p>
    </div>
  ];
  const viewData = [
    <div key="0">
      <p>Spreadsheets can be confusing and hard to manipulate. ScrAPDviz solves this problem.</p>
      <p>Using relevant metrics and categorization, ScrAPDviz makes it straightforward to comprehend the data.</p>
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
        We are fully transparent with our data sets. We publish them on{' '}
        <a href="https://github.com/scrapd/datasets/tree/master/datasets" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        and{' '}
        <a href="https://data.world/remy-greinhofer/scrapd" target="_blank" rel="noopener noreferrer">
          Data.World
        </a>{' '}
        .
      </p>
      <p>
        You can also use the buttons in the toolbar to retrieve a subset of data bounded by the dates you select in the
        date picker. The available formats are JSON and CSV.
      </p>
    </div>
  ];
  const contribute = [
    <div key="0">
      <p>
        All the ScrAPD projects are Open Source and hosted in the{' '}
        <a href="https://github.com/scrapd">ScrAPD organization</a> on Github. We welcome curious and compasionate
        collaborators, as well as meaningful contributions
      </p>
      <p>
        The general documentation is available <a href="https://docs.scrapd.org">here</a>.
      </p>
      <p>
        You can find the scraping tool we use to retrieve data at this{' '}
        <a href="https://github.com/scrapd/scrapd"> link</a>. and the source code for this dashboard{' '}
        <a href="https://github.com/scrapdviz/scrapdviz"> here</a>.
      </p>
      <p>
        ScrAPD is a project developed mostly by vonlunteers from Open Austin, a local organization solving civic
        problems using design and technology. You can learn more about it on their{' '}
        <a href="https://open-austin.org">website</a>.
      </p>
    </div>
  ];

  return (
    <div>
      <ScrapdHero
        title="scrAPD"
        subtitle1="Safety data, collected automatically for you"
        subtitle2="ScrAPD scrapes the web for traffic fatality data, making it accessible to all"
        url="https://res.cloudinary.com/ab91/image/upload/v1567305230/scrAPD%20Viz/hero_image.png"
      />
      <ScrapdHomeSection title="What is ScrAPD?" text={intro} img={'/static/images/photos/scrapd_docs.jpg'} />
      <ScrapdHomeSection
        title="Visualizing the data"
        text={viewData}
        img={'/static/images/photos/scrapd_viz.jpg'}
        reverse
      />
      <ScrapdHomeSection title="Data Sets" text={grabData} img={'/static/images/photos/data_world.jpg'} />
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
