import * as React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai';

import ImmersiveReader from './immersive-reader';

describe('<ImmersiveReader />', () => {
  it('should render', () => {
    const wrapper = shallow(<ImmersiveReader title="TestTitle" text="Test Text" locale="en-us" tokenURL="" />)
    expect(wrapper).to.equal("");
  })
})