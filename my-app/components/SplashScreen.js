import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import data from '../quotes.json'


const SplashScreen = ({ navigation }) => {
  const [quote, setQuote] = useState({quote: "", author: ""})
  useEffect(() => {
    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
    setQuote(randomQuote)
    setTimeout(() => {
      navigation.navigate('Main'); // Replace 'MainScreen' with your main screen's name
    }, 3000); // 3000 milliseconds = 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kindness Carousel</Text>
      <Image style={styles.logo} source={{uri: 'https://img.icons8.com/external-chloe-kerismaker/64/external-Carousel-carnival-chloe-kerismaker.png'}}/>
      <Text style={styles.quote}>"{quote.quote}"</Text>
      <Text style={styles.author}>-{quote.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EEA9'
  },

  title: {
    color: '#ED6B86',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  quote: {
    color: '#312F2F', 
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'italic',
  },

  author: {
    color: '#312F2F', 
    textAlign: 'center',
    fontSize: 15,
  },

  logo: {
    width: 64,
    height: 64, 
    marginBottom: 20,
  }
});

export default SplashScreen;