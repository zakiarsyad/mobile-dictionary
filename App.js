import React from 'react';
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SearchResult from './src/containers/SearchResult/'
import Home from './src/containers/Home/'
import store from './src/store/'

const SearchNavigation = createBottomTabNavigator({
  SearchResult: SearchResult,
});

const RootNavigation = createAppContainer(createSwitchNavigator({
  Home,
  SearchResult
}, { initialRouteName: 'Home'}));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
