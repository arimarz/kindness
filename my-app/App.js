import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import acts from './acts.json';

export default function App() {
  const [randomAct, setRandomAct] = useState('');

  const getRandomAct = () => {
    const categories = Object.values(acts); // Fetching array of all act categories
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]; // Select a random category
    const randomAct = randomCategory[Math.floor(Math.random() * randomCategory.length)]; // Select a random act from that category
    setRandomAct(randomAct); // Set the random act to state
  };
  
  return (
    <View style={styles.container}>
      <Text>"Be kind whenever possible. It is always possible" -Dalai Lama</Text>
      <Button title="Be Kind Today" onPress={getRandomAct} />
      {randomAct ? <Text style={styles.actText}>{randomAct}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
