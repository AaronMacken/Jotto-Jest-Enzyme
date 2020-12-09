import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
    const wrapper = setup();

    expect(wrapper.length).toBe(1);
});

test('renders no text when `success` is false', () => {
    const wrapper = setup({ success: false });

    expect(wrapper.text()).toBe("");
});

test('renders non-empty congrats message when `success` is true', () => {
    const wrapper = setup({ success: true });
    const message = wrapper.find('.success');

    expect(message.text().length).not.toBe(0);
});