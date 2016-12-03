import <%= componentName %> from '..';
import React from 'react';
import Test from 'ava';

import {shallow} from 'enzyme';

Test('test component', t => {
  const wrapper = shallow(<<%= componentName %> />);

  t.is(wrapper.contains(<div>Hello</div>), true);
});
