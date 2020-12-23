import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords { ...setupProps } />)
};

test('does not throw warning with expected props', () => {
    const propError = checkPropTypes(GuessedWords.propTypes, defaultProps);
    expect(propError).toBe(undefined);
});

describe('if there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    });

    test('renders without error', () => {
        const component = wrapper.find('.guessedWords');

        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = wrapper.find('.guessInstructions');

        console.log(wrapper.debug())

        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {

});



