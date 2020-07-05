import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'

import Home from './src/containers/Home/'
import store from './src/store/'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
