import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, TextInput } from 'react-native';
import { getDefinitions, setKeyword, setSearchPosition } from '../store/actions'

export default function Search(props) {
    const dispatch = useDispatch()
    const keyword = useSelector(state => state.keyword)

    const handleSearch = () => {
        dispatch(getDefinitions(keyword))
        dispatch(setSearchPosition('all'))
        props.navigation.navigate('SearchResult')
    }

    return (
        <TextInput
            style={styles["search-input"]}
            onSubmitEditing={handleSearch}
            placeholder="type a word and hit enter"
            value={keyword}
            onChangeText={text => dispatch(setKeyword(text))} />
    );
}

const styles = StyleSheet.create({
    'search-input': {
        width: '100%',
        borderRadius: 25,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 20,
        paddingRight: 20
    }
});
