import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, Portal, PortalProvider } from '../';
import Carousel from './Carousel';

describe('<Carousel />', () => {
  const Template = (
    <PortalProvider>
      <Carousel
        elements={[
          { title: 'home', component: () => <Text>home screen</Text> },
          { title: 'settings', component: () => <Text>settings screen</Text> },
        ]}
        gateNameRender="end"
      />
      <Portal name="end" />
    </PortalProvider>
  );

  it('should change screens when pressing buttons', async () => {
    const screen = render(Template);
    const settingsButton = screen.getByText('settings');
    for (let _ of '  ') fireEvent.press(settingsButton); // More than once (check re-renders)
    expect(screen.getByText('settings screen')).toBeDefined();
  });
});
