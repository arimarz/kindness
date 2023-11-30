import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  
  const samplePrompts = [
    "Write down three things you're grateful for today.",
    "Teach someone a new skill you're good at.",
    "Pick up litter in your local park.",
    "Share a positive meme or uplifting news on social media."
  ]

  const [prompt, setPrompt] = useState(samplePrompts[0])

  function onButtonPress() {
    let randomInt = Math.floor(Math.random() * 4)
    setPrompt(samplePrompts[randomInt])
  }

  return (
    <View style={styles.container}>
      <Text>Kindness Carousel</Text>
      <Text>{prompt}</Text>
      <Button title="New Prompt" onPress={onButtonPress}/>
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
