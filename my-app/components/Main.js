
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';
import acts from '../acts.json';

function Main() {
    const [randomAct, setRandomAct] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigation = useNavigation();

    const getRandomAct = () => {
        let categories = Object.values(acts);
        if (selectedCategory !== 'all') {
            categories = [acts[selectedCategory]];
        }

        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomAct = randomCategory[Math.floor(Math.random() * randomCategory.length)];
        setRandomAct(randomAct);
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>

            <Text style={styles.title}>Kindness Carousel</Text>

            <View style={styles.promptBack}>
                {randomAct ? <Text style={styles.promptText}>{randomAct}</Text> : null}
            </View>
            <View>
                <Pressable style={styles.promptButton} onPress={getRandomAct}>
                    <Text style={styles.buttonText}>Be Kind Today</Text>
                </Pressable>
                <Picker
                    selectedValue={selectedCategory}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
                >
                    <Picker.Item label="All Categories" value="all" />
                    {Object.keys(acts).map((category) => (
                    <Picker.Item key={category} label={category.split('_').join(' ')} value={category} />
                    ))}
                </Picker>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F4EEA9',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        color: '#ED6B86',
        fontWeight: 'bold',
        fontSize: 30,
    },
    promptButton: {
        backgroundColor: '#62BEC1',
        padding: 20,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    promptBack: {
        backgroundColor: '#fffff4',
        borderColor: '#62BEC1',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dotted',
        padding: 30,
    },
    promptText: {
        color: '#312F2F',
        textAlign: 'center',
        fontSize: 20
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
    picker: {
        borderRadius: 10,
        padding: 10,
        }
});

export default Main;
