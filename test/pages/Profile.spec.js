import React from 'react';
import { shallow } from 'enzyme';

import Profile from 'pages/Profile';

function setup() {
  return shallow(<Profile />);
}

describe('Profile', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
