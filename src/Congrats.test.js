import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import checkPropTypes from 'check-prop-types';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setup = (props = {}) => {
    return shallow(<Congrats {...defaultProps} {...props} />)
}

test('renders without error', () => {
    const wrapper = setup();

    expect(wrapper.length).toBe(1);
});

test('renders no text when `success` is false', () => {
    const wrapper = setup();

    expect(wrapper.text()).toBe("");
});

test('renders non-empty congrats message when `success` is true', () => {
    const wrapper = setup({ success: true });
    const message = wrapper.find('.success');

    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);

    expect(propError).toBe(undefined);
});