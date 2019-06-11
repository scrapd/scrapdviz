import Proptypes from 'prop-types';
import ScrapdGenericPieChart from '../scrapd-generic-pie-chart/component';

const ScrapdPieGraph = props => {
  let datamap = new Object();
  for (var i = 0; i < props.fatalities.length; i++) {
    let attr = props.fatalities[i][props.attribute];
    if (attr !== undefined) {
      attr = attr.toLowerCase();
    }
    if (datamap[attr] === undefined) {
      datamap[attr] = 1;
    } else {
      let attrCount = datamap[attr];
      datamap[attr] = attrCount + 1;
    }
  }

  return (
    <ScrapdGenericPieChart groupedItems={datamap} itemCount={props.fatalities.length} attribute={props.attribute} />
  );
};

ScrapdPieGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

export default ScrapdPieGraph;
