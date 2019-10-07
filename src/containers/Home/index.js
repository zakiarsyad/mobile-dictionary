import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants'

import Logo from '../../components/Logo'
import SearchResult from '../../containers/SearchResult/'
import Search from '../../components/Search'

export function Home(props) {
    return (
        <View style={styles.container}>
            <Logo navigation={props.navigation}/>
            <Search navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '40%',
        marginTop: Constants.statusBarHeight,
        width: '70%'
    }
});

export default createAppContainer(createSwitchNavigator(
    { Home, SearchResult },
    { initialRouteName: 'Home' }
));