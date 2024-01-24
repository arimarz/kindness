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
    const leftArrow = <Icon name="keyboard-arrow-left" size={30} color='#62BEC1'/>
    const rightArrow = <Icon name="keyboard-arrow-right" size={30} color='#62BEC1'/>

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>
            <Calendar renderArrow={(direction) => {
                                    if (direction == "left") return leftArrow;
                                    if (direction == "right") return rightArrow  
                                    }}
            />
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