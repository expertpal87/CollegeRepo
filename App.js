import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/Login/loginScreen';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={'light'}/>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
