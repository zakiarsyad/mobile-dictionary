import React from 'react';
import {
    FlatList
} from 'react-native';
import { useSelector } from 'react-redux'

import DefinitionItem from '../components/DefinitionItem'

export default function DefinitionsList() {
    const definitions = useSelector(state => state.definitions)

    return (
        <FlatList
            data={definitions}
            renderItem={({ item }) => (
                <DefinitionItem item={item}/>
            )}
            keyExtractor={item => item.definition} />
    )
}