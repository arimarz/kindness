import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Logout() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#F4EEA9',
    },
    scrollView: {
        width: '100%',
    },
});

export default Logout;