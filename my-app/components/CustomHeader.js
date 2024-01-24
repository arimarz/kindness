import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CustomHeader({title}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#ED6B86',
    },
    scrollView: {
        width: '100%',
    },
    menuButton: {
        position: 'absolute',
        top: 15,
        left: 20,
        zIndex: 1,
    },
    menuIcon: {
        fontSize: 30,
        color: '#312F2F',
    },
    title: {
        flex: 1, 
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,
        fontSize: 25,
        color: '#000',
    }
});

export default CustomHeader;