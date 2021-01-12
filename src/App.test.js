import React from 'react';
import { mount } from 'enzyme';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  return mount(<App />);
}

it('renders without error', () => {
  const appWrapper = setup();
  const appContainer = appWrapper.find('.appContainer');

  expect(appContainer.length).toBe(1);
});

describe('.getSecretWord', () => {
  it('should get called on app mount', () => {
    setup();

    // check to see if get secret word was run
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  it('should not update on app update', () => {
    const wrapper = setup();

    // mockFn was called once on mount - expected
    // so we clear it for testing purposes
    mockGetSecretWord.mockClear();

    // trigger an update
    wrapper.setProps();

    // check that mockFn was not called
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
