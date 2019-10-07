import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Logo(props) {
    const handlePress = () => {
        props.navigation.navigate('Home')
    }

    return (
        <TouchableOpacity
            style={styles.logo}>
            <Text style={styles.blue}>O</Text>
            <Text style={styles.red}>x</Text>
            <Text style={styles.yellow}>p</Text>
            <Text style={styles.blue}>o</Text>
            <Text style={styles.green}>r</Text>
            <Text style={styles.red}>d</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        marginBottom: 10
    },
    blue: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4285f4'
    },
    red: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ea4335'
    },
    yellow: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fbbc05'
    },
    green: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#34a853'
    }
});
