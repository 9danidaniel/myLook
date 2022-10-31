import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  StatusBar
} from 'react-native';




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#B4B0A2'}
      />
      <Text style={styles.headerText}>my look</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4E3',
    padding: 30
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2A2B2A'
  }
});

export default App;
