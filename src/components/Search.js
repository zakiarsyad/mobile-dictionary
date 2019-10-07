import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, TextInput } from 'react-native';
import { getDefinitions } from '../store/actions'

export default function Search(props) {
    const dispatch = useDispatch()

    const [keyword, setKeyword] = useState('')

    const handleSearch = () => {
        dispatch(getDefinitions(keyword))
            .then(() => {
                props.navigation.navigate('SearchResult')
            })
    }

    return (
        <TextInput
            style={styles["search-input"]}
            onSubmitEditing={handleSearch}
            value={keyword}
            onChangeText={setKeyword}/>
    );
}

const styles = StyleSheet.create({
    'search-input': {
        width: '100%',
        borderRadius: 25,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 20,
        paddingRight: 20
    }
});
