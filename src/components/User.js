import React, { useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Constants from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'

import { logout, getHistories, getDefinitions, setKeyword } from '../store/actions'

export default User = (props) => {
    const dispatch = useDispatch()
    const histories = useSelector(state => state.histories)
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getHistories())
    }, [])

    const handleLogOut = () => {
        dispatch(logout())
        props.navigation.navigate('Auth')
    }

    const handleWordClick = word => {
        dispatch(getDefinitions(word))
        dispatch(setKeyword(word))
        props.navigation.navigate('SearchResult')
    }

    console.log(histories)

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
            <Text>Hi {user.email}</Text>
            <Text>User History</Text>
            <Text style={{ fontSize: 12 }}>( click a single word to get more definitions)</Text>
            {histories &&
                histories.map((el, i) => {
                    return (
                        <View
                            key={i}
                            style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Text>keyword: </Text>
                            <TouchableOpacity
                                onPress={() => handleWordClick(el.keyword)}>
                                <Text>{el.keyword}</Text>
                            </TouchableOpacity>
                            <Text> - time: {(el.createdAt.toDate()).toString().slice(0,15)}</Text>
                        </View>
                    )
                })
            }
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