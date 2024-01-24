// TODO:
// - Styling and customizations
// - Logic for Tracking Active Days/Marking Dates 
// - Logic for Displaying Acts for a Given Day

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons'

function CalendarView() {
    const navigation = useNavigation();
    const leftArrow = <Icon name="keyboard-arrow-left"/>
    const rightArrow = <Icon name="keyboard-arrow-right"/>

    return (
        <View style={styles.container}>
            <Calendar />
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
})

export default CalendarView;