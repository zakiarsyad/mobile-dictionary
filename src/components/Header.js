import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'

import Logo from './Logo'
import Search from './Search'

export default function SearchResult(props) {
    const handlePress = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.logo} onPress={handlePress}>
                <Logo />
            </TouchableOpacity>
            <View style={{ marginBottom: 20, width: '100%' }}>
                <Search style={{ backgroundColor: 'red' }} navigation={props.navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    header: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        width: '100%',
        alignItems: 'center',
    }
});