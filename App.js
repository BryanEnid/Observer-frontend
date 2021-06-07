import React from 'react';
import { Text, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_600SemiBold,
  Quicksand_500Medium,
  Quicksand_400Regular,
  Quicksand_300Light,
} from '@expo-google-fonts/quicksand';
import { Profile } from './src/screens';
import { PortalProvider } from './src/components';

// // Disable Font Scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_700: Quicksand_700Bold,
    Quicksand_600: Quicksand_600SemiBold,
    Quicksand_500: Quicksand_500Medium,
    Quicksand_400: Quicksand_400Regular,
    Quicksand_300: Quicksand_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <PortalProvider>
      <Profile />
    </PortalProvider>
  );
}
