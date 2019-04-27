import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from '../pages/index.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Given we load our app', () => {
  it('Then renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toBeTruthy();
  });
});
