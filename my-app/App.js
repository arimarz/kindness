import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
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
      <Text style={styles.title}>Kindness Carousel</Text>
      <View style={styles.promptBack}>
        <Text style={styles.promptText}>{prompt}</Text>
      </View>
      <Pressable style={styles.promptButton} onPress={onButtonPress}>
        <Text style={styles.buttonText}>New Prompt</Text>
      </Pressable>
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
  }
});
