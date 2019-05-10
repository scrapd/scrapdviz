import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ScrapdFatalityCounter from '../component';
import { fatalities } from '../../../mock-api/mock-data.js';

configure({ adapter: new Adapter() });

describe('Fatality counter component', () => {
  test('Renders properly with empty fatalities', () => {
    const rendered = mount(<ScrapdFatalityCounter fatalities={[]} />);
    expect(rendered).toMatchSnapshot();
  });

  test('Renders properly with greater than 0 fatalities', () => {
    const rendered = mount(<ScrapdFatalityCounter fatalities={fatalities} />);
    expect(rendered).toMatchSnapshot();
  });
});
