import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from '../';

describe('<Text />', () => {
  it('should render correctly', async () => {
    const screen = render(<Text />);
    const text = screen.getByTestId('text');
    expect(text).toBeDefined();
  });
});
