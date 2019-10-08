import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Constants from 'expo-constants'
import { useSelector } from 'react-redux'

export default function ImageResult(props) {
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
        paddingHorizontal: 20,
    }
})
