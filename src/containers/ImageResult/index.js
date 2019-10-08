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

export default function ImageResult(props) {
    const loading = useSelector(state => state.loading)

    return (
        <View style={styles.container}>
            <Text>ini image result</Text>
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
