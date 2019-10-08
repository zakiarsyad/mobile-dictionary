import React, { useEffect } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import { setKeyword } from '../../store/actions'
import Logo from '../../components/Logo'
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
        paddingHorizontal: 20,
        paddingTop: '40%'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    }
});

