import React, { useEffect } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Animated,
    PanResponder
} from 'react-native'
import { useDispatch } from 'react-redux'
import Constants from 'expo-constants'

import { setKeyword, logout } from '../store/actions'

export default function LogoutButton(props) {
    const _panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
            console.log('masuk');
            Animated.timing(styles.modal.opacity, {
                toValue: 1,
                duration: 200,
            }).start();
        },
        onPanResponderRelease: (evt, gestureState) => {
            Animated.timing(styles.modal.opacity, {
                toValue: 0,
                duration: 200,
            }).start();
        },
    });

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setKeyword(''))
    }, [])

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <TouchableOpacity
            onPress={handleLogout}
            style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}
            {..._panResponder.panHandlers}>
            <Text style={styles.logoutbutton}>Log Out</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logoutbutton: {
        backgroundColor: '#fff',
        color: 'black',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    }
});

