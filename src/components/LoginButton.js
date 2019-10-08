import React, { useEffect } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'
import { useDispatch } from 'react-redux'
import Constants from 'expo-constants'

import { setKeyword } from '../store/actions'

export default function LoginButton(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setKeyword(''))
    }, [])

    const handleLinkAuth = () => {
        props.navigation.navigate('Auth')
    }

    return (
        <TouchableOpacity
            onPress={handleLinkAuth}
            style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}>
            <Text style={styles.loginbutton}>Log In</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginbutton: {
        backgroundColor: '#4285f4',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    }
});

