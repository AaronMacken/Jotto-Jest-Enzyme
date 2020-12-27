import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
  return shallow(<App />);
}

it('renders without error', () => {
  const appWrapper = setup();
  const appContainer = appWrapper.find('.appContainer');

  expect(appContainer.length).toBe(1);
});
