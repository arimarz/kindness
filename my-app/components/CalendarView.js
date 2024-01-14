// TODO:
// - Styling
// - Logic for Tracking Active Days/Marking Dates 
// - Logic for Displaying Acts for a Given Day

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

function CalendarView() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>
            <Calendar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F4EEA9',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    menuIcon: {
        fontSize: 30,
        color: '#312F2F',
    },
})

export default CalendarView;