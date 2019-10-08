import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import Constants from 'expo-constants'
import { useSelector } from 'react-redux'

import DefinitionsList from '../../components/DefinitionsList'
import Header from '../../components/Header'

export default function SearchResult(props) {
    // return (<Text style={{fontSize: 36}}>Foo</Text>);
    const loading = useSelector(state => state.loading)

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {!loading && <DefinitionsList />}
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
})
