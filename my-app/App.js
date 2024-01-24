import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon component
import SplashScreen from './components/SplashScreen';
import Main from './components/Main';
import CalendarView from './components/CalendarView';
import Badges from './components/Badges';
import People from './components/People';
import Settings from './components/Settings';
import Groups from './components/Groups';
import Logout from './components/Logout';
import CustomHeader from './components/CustomHeader';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="SplashScreen"
                screenOptions={({ navigation, route }) => {
                    let screenTitle;
                    if (route.state?.routes.length) {
                        const currentRoute = route.state.routes[route.state.index];
                        screenTitle = currentRoute.params?.title || currentRoute.name;
                    } else {
                        screenTitle = route.params?.title || route.name;
                    }
                    console.log("Current Screen Title:", screenTitle)
                    return {
                        headerShown: route.name !== "SplashScreen",
                        header: () => (
                            route.name !== "SplashScreen" && 
                            <CustomHeader 
                                navigation={navigation} 
                                title={screenTitle}
                            />
                        ),
                    };
                }}
            >
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
                    name="Friends" 
                    component={People} 
                    options={{ 
                        title: 'Friend Feed',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="account-heart" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name="Calendar" 
                    component={CalendarView} 
                    options={{ 
                        title: 'Calendar',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="calendar-month" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name="Groups" 
                    component={Groups} 
                    options={{ 
                        title: 'Groups',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="account-group" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name="Settings" 
                    component={Settings} 
                    options={{ 
                        title: 'Settings',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="cog" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name="Logout" 
                    component={Logout} 
                    options={{ 
                        title: 'Logout',
                        drawerIcon: ({focused, size}) => (
                            <Icon name="logout" size={size} color={focused ? '#7cc' : '#ccc'} />
                        )
                    }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}