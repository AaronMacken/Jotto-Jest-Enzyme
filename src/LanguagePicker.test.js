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
    const wrapper = setup();
    const languageIcons = wrapper.find('.language-icon');

    expect(languageIcons.length).toBeGreaterThan(0);
});

test('calls setLanguage on click', () => {
    const wrapper = setup();
    const languageIcons = wrapper.find('.language-icon');

    // get the first icon
    const firstIcon = languageIcons.first();
    firstIcon.simulate("click");

    expect(mockSetLanguage).toHaveBeenCalled();
});