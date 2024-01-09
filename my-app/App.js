import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './components/SplashScreen';
import Main from './components/Main';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="SplashScreen" component={SplashScreen} />
                <Drawer.Screen name="Main" component={Main} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}