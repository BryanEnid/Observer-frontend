import React from 'react';
import { Text, TextInput } from 'react-native';
import { Profile } from './src/screens';
import { PortalProvider } from './src/components';

// // Disable Font Scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  return (
    <PortalProvider>
      <Profile />
    </PortalProvider>
  );
}
