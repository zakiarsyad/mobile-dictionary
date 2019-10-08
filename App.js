import React from 'react';
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SearchResult from './src/containers/SearchResult/'
import Home from './src/containers/Home/'
import Auth from './src/containers/Auth/'
import store from './src/store/'

const RootNavigation = createAppContainer(createSwitchNavigator({
  Home,
  SearchResult,
  Auth
}, { initialRouteName: 'Home'}));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
