import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import Input from './Input';


const defaultProps = { secretWord: 'Party' };

const setup = () => {
    return shallow(<Input {...defaultProps} />);
};

describe('Input component', () => {
    it('should render without error', () => {
        const input = setup();
        const inputWrapper = input.find('.input');

        expect(inputWrapper.length).toBe(1);
    });

    it('should have a `secretWord` prop', () => {
        const propError = checkPropTypes(Input.propTypes, defaultProps, 'prop', Input.secretWord);

        expect(propError).toBe(undefined);
    });
});

describe('state controlled input field', () => {
    let inputComponent;
    let mockSetCurrentGuess = jest.fn();

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        inputComponent = setup();
    });

    it('should update state with value of input box on change', () => {
        const inputBox = inputComponent.find('.inputBox');

        // mock data, as if this were typed into the input element
        const mockEvent = { target: { value: 'train'}};
        // use the simulate function to call click & pass in the mock data
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    it('should set the input box to an empty string once submitted', () => {
        const submitButton = inputComponent.find('.submitButton');

        const mockEvent = { preventDefault(){}}

        submitButton.simulate('click', mockEvent);
        expect (mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
}); 