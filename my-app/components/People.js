import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const actsOfKindness = [
    { id: '1', user: 'Alice', act: 'Donated clothes to a local shelter' },
    { id: '2', user: 'Bob', act: 'Helped an elderly neighbor with groceries' },
    { id: '3', user: 'Charlie', act: 'Volunteered at a food bank' },
    { id: '4', user: 'Diana', act: 'Organized a community cleanup' },
    { id: '5', user: 'Ethan', act: 'Planted trees in the neighborhood park' },
    { id: '6', user: 'Fiona', act: 'Cooked a meal for a sick friend' },
    { id: '7', user: 'George', act: 'Tutored students at a local school' },
    { id: '8', user: 'Hannah', act: 'Raised funds for animal rescue' },
    { id: '9', user: 'Ian', act: 'Donated books to the library' },
    { id: '10', user: 'Julia', act: 'Prepared care packages for the homeless' },
    // Add source or json file here
];

function People() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{item.user}</Text>
            <Text>{item.act}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={actsOfKindness}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#F4EEA9'
    },
    item: {
        backgroundColor: '#ED6B86',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default People;
