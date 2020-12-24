import { shallow } from 'enzyme';

import App from './App';

test('renders without error', () => {
  const appWrapper = shallow(<App />);

  expect(appWrapper.length).toBe(1);
});
