import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SplashScreen from './components/SplashScreen';
import Main from './components/Main';

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}  
        >
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{title: 'Welcome - Kindness Carousel'}}/>
          <Stack.Screen name='Main' component={Main} options={{title: 'Choose Category and Prompt - Kindness Carousel'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}