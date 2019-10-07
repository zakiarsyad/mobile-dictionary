import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import { useSelector } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Logo from '../../components/Logo'
import Search from '../../components/Search'

export default function SearchResult(props) {
    const definitions = useSelector(state => state.definitions)

    const handlePress = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Logo />
            </TouchableOpacity>
            <View style={{ marginBottom: 20, width: '100%' }}>
                <Search />
            </View>
            <FlatList
                data={definitions}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{ color: 'green' }}>{item.definition}</Text>
                        <Text>{item.typeOf}</Text>
                        <Text>{item.synonyms}</Text>
                        <Text>{item.antonyms}  </Text>
                    </View>
                )}
                keyExtractor={item => item.definition}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: Constants.statusBarHeight,
        width: '90%'
    }
});