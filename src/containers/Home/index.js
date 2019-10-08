import React, { useEffect } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Constants from 'expo-constants'

import { setKeyword, logout } from '../../store/actions'
import Logo from '../../components/Logo'
import Search from '../../components/Search'

export default function Home(props) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    useEffect(() => {
        dispatch(setKeyword(''))
    }, [])

    const handleLinkAuth = () => {
        props.navigation.navigate('Auth')
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>  
            {!isLoggedIn &&
                <TouchableOpacity
                    onPress={handleLinkAuth}
                    style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}>
                <Text style={styles.loginbutton}>Log In</Text>
                </TouchableOpacity>
            }
            {isLoggedIn &&
                <TouchableOpacity
                    onPress={handleLogout}
                    style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}>
                    <Text style={styles.logoutbutton}>Log Out</Text>
                </TouchableOpacity>
            }
            <View style={styles.container}>
                <TouchableOpacity style={styles.logo}>
                    <Logo />
                </TouchableOpacity>
                <Search navigation={props.navigation}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: '40%'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    loginbutton: {
        backgroundColor: '#4285f4',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    },
    logoutbutton: {
        backgroundColor: '#fff',
        color: 'black',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    }
});

