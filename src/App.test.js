import React from 'react';
import { mount } from 'enzyme';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = (secretWord="party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([
    { secretWord },
    jest.fn()
  ]);

  // replace react use reducer w/ our mock function
  React.useReducer = mockUseReducer;

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

describe('secret word is not null', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup('party');
  });

  it('renders app when secret word is not null', () => {
    const appComponent = wrapper.find('.appContainer');

    expect(appComponent.exists()).toBe(true);
  });

  it('does not render spinner if secret word is not null', () => {
    const spinnerContainer = wrapper.find('.spinner');

    expect(spinnerContainer.exists()).toBe(false);
  });
});

describe('secret word is null', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(null);
  });

  it('does not render app when secret word is null', () => {
    const appComponent = wrapper.find('.appContainer');

    expect(appComponent.exists()).toBe(false);
  });

  it('renders spinner if secret word is null', () => {
    const spinnerContainer = wrapper.find('.spinner-border');

    expect(spinnerContainer.exists()).toBe(true);
  });
});
