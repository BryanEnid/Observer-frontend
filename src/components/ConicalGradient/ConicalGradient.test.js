import React from 'react';
import { Image } from 'react-native';
import { render } from '@testing-library/react-native';
import { ConicalGradient } from '../';

describe('<ConicalGradient />', () => {
  it('should render correctly', async () => {
    const screen = render(
      <ConicalGradient>
        <Image testID="image" />
      </ConicalGradient>
    );

    const image = screen.getByTestId('image');
    expect(image).toBeDefined();
  });
});
