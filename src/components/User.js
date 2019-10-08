import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Constants from 'expo-constants'
import { useDispatch } from 'react-redux'

import { logout } from '../store/actions'

export default User = (props) => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout())
        props.navigation.navigate('Auth')
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection:'row', justifyContent: 'space-around', alignContent: 'space-around', width: '100%' }}>
                <TouchableOpacity
                    onPress={() => props.handleModal(false)}
                    style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-start', marginLeft: 20 }}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleLogOut}
                    style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}>
                    <Text style={styles.button}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <Text>User History</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    button: {
        backgroundColor: '#fff',
        color: 'black',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    }
})