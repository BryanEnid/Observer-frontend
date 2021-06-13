import React from 'react';
import { Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_600SemiBold,
  Quicksand_500Medium,
  Quicksand_400Regular,
  Quicksand_300Light,
} from '@expo-google-fonts/quicksand';
import { Profile, ProfileVideo } from './src/screens';
import { PortalProvider } from './src/components';
import { navigationRef } from './src/controllers/NavigationController';

// // Disable Font Scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const Stack = createStackNavigator();

const screenConfig = {
  headerShown: false,
};

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
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Profile" screenOptions={screenConfig}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProfileVideo" component={ProfileVideo} />
        </Stack.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
}
