import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const ScrapdDeveloperView = ({ fatalities }) => {
  return (
    <div>
        <h3>Scrapd has documentation available at this link: <a href="https://docs.scrapd.org">Docs</a>.</h3>
        <h3>Scrapd is open-source. You can find the scraping tool we use to retrieve data at this link: <a href="https://github.com/scrapd/scrapd">Scraper Source</a>.</h3>
        <h1>You can also find the source code for this site at this link: <a href="https://github.com/scrapdviz/scrapdviz">Visualization Source</a>.</h1>
        <h3>ScrAPD is a project of Open Austin, a Code for America brigade. You can find more data about the organization at this link: <a href="https://open-austin.org">Open Austin</a>.</h3>
    </div>
  );
};


export default ScrapdDeveloperView;
