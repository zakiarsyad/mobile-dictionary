import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Logo(props) {
    return (
        <View style={styles.logo}>
            <Text style={styles.blue}>O</Text>
            <Text style={styles.red}>x</Text>
            <Text style={styles.yellow}>p</Text>
            <Text style={styles.blue}>o</Text>
            <Text style={styles.green}>r</Text>
            <Text style={styles.red}>d</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        width: '100%',
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
