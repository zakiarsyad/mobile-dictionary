import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight,
    Alert
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Constants from 'expo-constants'

import { setKeyword, logout } from '../../store/actions'
import Logo from '../../components/Logo'
import Search from '../../components/Search'
import User from '../../components/User'

export default function Home(props) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        dispatch(setKeyword(''))
    }, [])

    const handleLinkAuth = () => {
        props.navigation.navigate('Auth')
    }

    const handleModal = (value) => {
        setModalVisible(value)
    }
    
    return (
        <>  
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <User
                    handleModal={handleModal}
                    navigation={props.navigation}/>
            </Modal>
            {!isLoggedIn &&
                <TouchableOpacity
                    onPress={handleLinkAuth}
                    style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}>
                <Text style={styles.loginbutton}>Log In</Text>
                </TouchableOpacity>
            }
            {isLoggedIn &&
                <TouchableOpacity
                    onPress={() => handleModal(true)}
                    style={StyleSheet.absoluteFill, { marginTop: Constants.statusBarHeight + 20, alignItems: 'flex-end', marginRight: 20 }}>
                    <Text style={styles.logoutbutton}>User</Text>
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

