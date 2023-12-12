import React, {useState} from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Pressable, Picker } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import acts from './acts.json';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [randomAct, setRandomAct] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getRandomAct = () => {
    let categories = Object.values(acts);
    if (selectedCategory !== 'all') {
      categories = [acts[selectedCategory]];
    }

    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomAct = randomCategory[Math.floor(Math.random() * randomCategory.length)];
    setRandomAct(randomAct);
  };

  const main = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Kindness Carousel</Text>
      <View style={styles.promptBack}>
        {randomAct ? <Text style={styles.promptText}>{randomAct}</Text> : null}
      </View>
      <Pressable style={styles.promptButton} onPress={getRandomAct}>
        <Text style={styles.buttonText}>Be Kind Today</Text>
      </Pressable>
      <Picker
        selectedValue={selectedCategory}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="All Categories" value="all" />
        {Object.keys(acts).map((category) => (
          <Picker.Item key={category} label={category.split('_').join(' ')} value={category} />
        ))}
      </Picker>
      <StatusBar style="auto" />
    </View>
    )
  }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name='Main'>{main}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
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
  }
});
