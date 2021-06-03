import React from 'react';
import { Text, TextInput } from 'react-native';
import { Profile } from './src/screen_prototypes';

// // Disable Font Scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  return <Profile />;
}
