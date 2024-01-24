// TODO:
// - Styling and customizations
// -- Make calendar larger in size (can figure out how to do this on web but not on mobile)
// - Logic for Tracking Active Days/Marking Dates 
// -- How can I 'fetch' only the user data for a given month?
// - Logic for Displaying Acts for a Given Day

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import DayView from './DayView';
import userdata from '../userdata.json';

function CalendarView() {
    const navigation = useNavigation();
    const leftArrow = <Icon name="keyboard-arrow-left" size={30} color='#62BEC1'/>
    const rightArrow = <Icon name="keyboard-arrow-right" size={30} color='#62BEC1'/>
    
    const [user, setUser] = useState(userdata['user'])
    const [selectedDate, setSelectedDate] = useState(null)
    const [monthData, setMonthData] = useState(null)

    console.log(Date())

    const markedDates = {
        // '2024-01-01': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-02': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-07': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-10': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-11': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-18': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-20': {textColor: 'white', color: '#62BEC1'},
        // '2024-01-23': {textColor: 'white', color: '#62BEC1'}
    }

    function handleDayPress(date){
        setSelectedDate(date)
    }

    function handleMonthChange(month) {
        const newMonth = month.dateString.slice(0, -3)
        const data = user[`${newMonth}`]
        console.log(user)
        setMonthData(data)
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>
            <View style={styles.calendarWrapper}>
                <Calendar
                markingType={'period'}
                markedDates={markedDates} 
                renderArrow={(direction) => {
                                if (direction == "left") return leftArrow;
                                if (direction == "right") return rightArrow;  
                            }}
                style={styles.calendar}
                onDayPress={handleDayPress}
                onMonthChange={handleMonthChange}
                // theme={{
                //     'stylesheet.day.basic': {
                //         'base': {
                //             width: 200, 
                //             height: 100
                //         }
                //     }
                // }}
                />
                {
                    (selectedDate == null)
                    ? null
                    : <DayView/>
                }
            </View>
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
        borderWidth: 1,
        borderColor: 'red'
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
    calendar: {
        borderWidth: 1,
        borderColor: '#62BEC1',
        borderRadius: 4,
    },
    calendarWrapper: {
        borderWidth: 1,
        // width: '80%',
        // height: '80%'
    }

})

export default CalendarView;