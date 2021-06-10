import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
// import { Observatory } from '../screens/authenticated';
// import {} from '../screens/no-authenticated';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Observatory} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
