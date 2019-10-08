import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import Constants from 'expo-constants'
import { useSelector } from 'react-redux'

import DefinitionsList from '../../components/DefinitionsList'
import ImagesList from '../../components/ImagesList'
import Header from '../../components/Header'

export default function SearchResult(props) {
    const loading = useSelector(state => state.loading)
    const searchPosition = useSelector(state => state.searchPosition)

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {!loading && searchPosition === 'all' && <DefinitionsList />}
            {!loading && searchPosition === 'images' && <ImagesList />}
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
        paddingHorizontal: 20,
    }
})
