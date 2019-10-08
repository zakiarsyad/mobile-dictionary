import React from 'react';
import {
    Text
} from 'react-native';

export default function DefinitionsList(props) {
    return (
        <>
            <Text style={{ fontWeight: 'bold' }}>{props.title} : </Text>
            {props.item.map(el => {
                return (
                    <Text key={el}>
                        <Text>{el}, </Text>
                    </Text>
                )
            })}
        </>
    )
}