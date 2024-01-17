import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon component
import SplashScreen from './components/SplashScreen';
import Main from './components/Main';
import CalendarView from './components/CalendarView';
import Badges from './components/Badges';
import People from './components/People';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
                <Drawer.Screen 
                    name="Main" 
                    component={Main} 
                    options={{ 
                        title: 'Home',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name="SplashScreen" 
                    component={SplashScreen} 
                    options={{ 
                        title: 'Splash Screen', 
                        drawerItemStyle: { display: 'none' }
                    }} 
                />
                <Drawer.Screen 
                    name="Badges" 
                    component={Badges} 
                    options={{ 
                        title: 'Badges',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="shield" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name="People" 
                    component={People} 
                    options={{ 
                        title: 'People',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="account-group" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}