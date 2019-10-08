import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SearchResult from './src/containers/SearchResult/'

import Home from './src/containers/Home/'
import store from './src/store/'

const TabNavigator = createBottomTabNavigator({
  SearchResult: SearchResult,
});

const RootNavigation = createAppContainer(createSwitchNavigator({
  Home,
  SearchResult: TabNavigator
}));

export default function App() { 
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};