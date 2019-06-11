import Proptypes from 'prop-types';
import ScrapdGenericPieChart from '../scrapd-generic-pie-chart/component';

function isBetween(x, min, max) {
  return x >= min && x <= max;
}

const ScrapdAgeGraph = props => {
  let datamap = new Object();
  datamap['00-17'] = 0;
  datamap['18-24'] = 0;
  datamap['25-49'] = 0;
  datamap['50-64'] = 0;
  datamap['65-99'] = 0;
  datamap['undefined'] = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    let age = props.fatalities[i]['Age'];
    if (isBetween(age, 0, 17)) {
      let ageCount = datamap['00-17'];
      datamap['00-17'] = ageCount + 1;
    } else if (isBetween(age, 18, 24)) {
      let ageCount = datamap['18-24'];
      datamap['18-24'] = ageCount + 1;
    } else if (isBetween(age, 25, 49)) {
      let ageCount = datamap['25-49'];
      datamap['25-49'] = ageCount + 1;
    } else if (isBetween(age, 50, 64)) {
      let ageCount = datamap['50-64'];
      datamap['50-64'] = ageCount + 1;
    } else if (isBetween(age, 65, 99)) {
      let ageCount = datamap['65-99'];
      datamap['65-99'] = ageCount + 1;
    } else {
      let ageCount = datamap['undefined'];
      datamap['undefined'] = ageCount + 1;
    }
  }

  return <ScrapdGenericPieChart groupedItems={datamap} itemCount={props.fatalities.length} attribute="Age" />;
};

ScrapdAgeGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

export default ScrapdAgeGraph;
