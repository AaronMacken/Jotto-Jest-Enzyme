import React from "react";
import LanguagePicker from './LanguagePicker';
import { shallow } from "enzyme";
import checkPropTypes from 'check-prop-types';

const mockSetLanguage = jest.fn();

const setup = () => {
    return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.languagePicker');

    expect(component.exists()).toBe(true);
});

test('does not throw warning with expected props', () => {
    const warning = checkPropTypes(LanguagePicker.propTypes, { setLanguage: jest.fn()});

    expect(warning).toBeFalsy();
});

test('calls non-zero language icons', () => {

});

test('calls setLanguage on click', () => {

});