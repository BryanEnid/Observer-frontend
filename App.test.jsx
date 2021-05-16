import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import App from './App';

it('renders correctly', () => {
  // const { toJSON } = render(<App />);
  // expect(toJSON()).toMatchSnapshot();
  const tree = renderer.create(<App />).toJSON();
  expect(tree.children.length).toBe(1);
});
