import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SplashScreen from './components/SplashScreen';
import Main from './components/Main';

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name='Main' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}