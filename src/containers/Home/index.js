import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import Constants from 'expo-constants'

import { setKeyword } from '../../store/actions'
import Logo from '../../components/Logo'
import ImageResult from '../../containers/ImageResult/'
import Search from '../../components/Search'

export default function Home(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setKeyword(''))
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logo}>
                <Logo />
            </TouchableOpacity>
            <Search navigation={props.navigation}/>
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
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    }
});

