import React from 'react';
import { render } from '@testing-library/react-native';
import Divider from './Divider';

describe('<Divider />', () => {
  it('should render correctly', async () => {
    const screen = render(<Divider />);
    const divider = screen.getByTestId('divider');
    expect(divider).toBeDefined();
  });
});
