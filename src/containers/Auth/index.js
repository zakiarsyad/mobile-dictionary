import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { login, setRegistered, register } from '../../store/actions'
import Logo from '../../components/Logo'

export default function Auth(props) {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isRegistered = useSelector(state => state.isRegistered)
    const loading = useSelector(state => state.loading)
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn) props.navigation.navigate('Home')
    }, [isLoggedIn])

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }

    const handleRegister = async () => {
        dispatch(register({ email, password }))
    }

    const handleLinkAuth = () => {
        dispatch(setRegistered())
    }

    const handleLinkAsGuess = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            {!loading && 
                <>
                    <View style={styles.logo}>
                        <Logo />
                    </View>
                    <TextInput 
                        onChangeText={setEmail}
                        name="email"
                        style={styles.input}
                        placeholder='email'/>
                    <TextInput 
                        onChangeText={setPassword}
                        name="password"
                        style={styles.input}
                        placeholder='password' />
                
                    {isRegistered &&
                        <>
                            <TouchableOpacity
                                onPress={handleLogin}
                                style={styles.button}>
                                <Text style={styles['button-text']}>Log In</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Don't have an account ?</Text>
                            <TouchableOpacity
                                onPress={handleLinkAuth}>
                                <Text style={{ color: '#4285f4'}}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                    }
                
                    {!isRegistered &&
                        <>
                            <TouchableOpacity
                                onPress={handleRegister}
                                style={styles.button}>
                                <Text style={styles['button-text']}>Register</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Already have an account ?</Text>
                                <TouchableOpacity onPress={handleLinkAuth}>
                                    <Text style={{ color: '#4285f4' }}>Log In</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                    <View style={{ alignItems: 'center' }}>
                        <Text>or</Text>
                        <TouchableOpacity onPress={handleLinkAsGuess}>
                            <Text style={{ color: '#4285f4' }}>Login as guest</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 60,
        paddingTop: '40%'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    input: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        borderColor: '#ddd',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    button: {
        borderWidth: 1, 
        borderColor: '#4285f4', 
        width: '100%', 
        borderRadius: 5, 
        marginBottom: 10, 
        paddingHorizontal: 20, 
        backgroundColor: '#4285f4', 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    'button-text': {
        color: 'white',
        fontWeight: 'bold'
    }
});

