import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux'

import { getDefinitions, setKeyword } from '../store/actions'

export default function DefinitionsList(props) {
    const dispatch = useDispatch()

    const handleWordClick = word => {
        dispatch(getDefinitions(word))
        dispatch(setKeyword(word))
    }

    return (
        <>
            <Text style={{ fontWeight: 'bold' }}>{props.title} : </Text>
            {props.item.map(el => {
                return (
                    <TouchableOpacity
                        key={el}
                        onPress={() => handleWordClick(el)}>
                        <Text>{el}, </Text>
                    </TouchableOpacity>
                )
            })}
        </>
    )
}