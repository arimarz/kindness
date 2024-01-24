import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//example to be replaced
const badges = [
    { id: '1', title: 'Kindness Newbie', description: 'Completed 5 acts of kindness' },
    { id: '2', title: 'Helping Hand', description: 'Helped 10 neighbors' },
    { id: '3', title: 'Eco Warrior', description: 'Participated in 5 environmental activities' },
    { id: '4', title: 'Compassionate Creator', description: 'Initiated a community project' },
    { id: '5', title: 'Charity Champion', description: 'Raised significant funds for a cause' },
    { id: '6', title: 'Good Samaritan', description: 'Provided aid in an emergency' },
    { id: '7', title: 'Friendship Founder', description: 'Made new connections in the community' },
    { id: '8', title: 'Peace Promoter', description: 'Mediated a difficult situation successfully' },
    { id: '9', title: 'Animal Ally', description: 'Helped in animal rescue or care' },
    { id: '10', title: 'Health Hero', description: 'Volunteered in health and wellness initiatives' },
];

function Badges() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {badges.map((badge) => (
                    <View key={badge.id} style={styles.badgeContainer}>
                        <Image 
                            source={require('../images/badge.png')}// one badge or a different kind for each
                            style={styles.badgeImage}
                        />
                        <Text style={styles.badgeTitle}>{badge.title}</Text>
                        <Text style={styles.badgeDescription}>{badge.description}</Text>
                    </View>
                ))}
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
    badgeContainer: {
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
    },
    badgeImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    badgeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#62BEC1',
    },
    badgeDescription: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 2,
    },
});

export default Badges;