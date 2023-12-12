import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main'); // Replace 'MainScreen' with your main screen's name
    }, 5000); // 3000 milliseconds = 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kindness Carousel</Text>
      <Image style={styles.logo} source={{uri: 'https://img.icons8.com/external-chloe-kerismaker/64/external-Carousel-carnival-chloe-kerismaker.png'}}/>
      <Text style={styles.quote}>"Be kind whenever possible. It is always possible" -Dalai Lama</Text>
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

  logo: {
    width: 64,
    height: 64, 
    marginBottom: 20,
  }
});

export default SplashScreen;