import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [displaySplash, setDisplaySplash] = useState(true);
  const Splash_Screen = () => {
    return (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Text style={{ width: '100%', height: '100%', color: 'gree', fontSize: '24px' }} >
            Weather App
          </Text>

        </View>
      </View >)
  }
  setTimeout(function () {
    setDisplaySplash(false);
  }, 3000);


  return (

    displaySplash ?
      Splash_Screen()
      :
      (
        <>
          <Route exact path="/WeatherDetail" component={WeatherDetail} />
          <Route exact path="/" component={WeatherList} />
        </>
      )
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
