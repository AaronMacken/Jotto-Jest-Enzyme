import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const setup = () => {
    return shallow(<Input />);
};

describe('Input component', () => {
    it('should render without error', () => {
        const input = setup();
        const inputWrapper = input.find('.input');

        expect(inputWrapper.length).toBe(1);
    })
});