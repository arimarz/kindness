import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import SplashScreen from './components/SplashScreen';
import Main from './components/Main';
import CalendarView from './components/CalendarView';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Calendar" screenOptions={{headerShown: false}}>
                <Drawer.Screen name="SplashScreen" component={SplashScreen} options={{title: 'Welcome - Kindness Carousel'}}/>
                <Drawer.Screen name="Main" component={Main} options={{title: 'Choose Category and Prompt - Kindness Carousel'}}/>
                <Drawer.Screen name="Calendar" component={CalendarView} options={{title: 'Calendar - Kindness Carousel'}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}