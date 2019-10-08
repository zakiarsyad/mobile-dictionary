import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchPosition, getImages } from '../store/actions'
import Logo from './Logo'
import Search from './Search'

export default function SearchResult(props) {
    const dispatch = useDispatch()
    const keyword = useSelector(state => state.keyword)

    const handlePress = () => {
        props.navigation.navigate('Home')
    }

    const handleLinkToDefinitions = () => {
        dispatch(setSearchPosition('all'))
    }

    const handleLinkToImages = () => {
        dispatch(setSearchPosition('images'))
        dispatch(getImages(keyword))
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.logo} onPress={handlePress}>
                <Logo />
            </TouchableOpacity>
            <View style={{ marginBottom: 20, width: '100%' }}>
                <Search navigation={props.navigation} />
            </View>
            <View style={styles['menu-tab']}>
                <TouchableOpacity 
                    onPress={handleLinkToDefinitions}
                    style={{ width:'50%', alignItems: 'center' }}>
                    <Text style={{ color: '#4f4e4e' }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={handleLinkToImages}
                    style={{ width:'50%', alignItems: 'center' }}>
                    <Text style={{ color: '#4f4e4e' }}>Images</Text>
                </TouchableOpacity>
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
    'menu-tab': {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    header: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        width: '100%',
        alignItems: 'center'
    }
});