import React from 'react';
import { Text, Portal, PortalProvider } from '../';
import renderer from 'react-test-renderer';

import Carousel from './Carousel';

describe('<Carousel />', () => {
  it('Renders and passes data through portal', () => {
    const Template = (
      <PortalProvider>
        <Carousel
          elements={[{ title: 'button', component: () => <Text>Text to test</Text> }]}
          gateNameRender="dimension"
        />
        <Portal name="dimension" />
      </PortalProvider>
    );
  });
});
