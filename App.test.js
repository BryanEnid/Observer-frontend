import React from 'react';
// import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import App from './App';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree.children.length).toBe(1);

  // const { toJSON } = render(<App />); // ** THIS DOESN'T WORK EITHER **
  // expect(toJSON()).toMatchSnapshot();
});
