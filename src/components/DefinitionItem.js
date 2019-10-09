import React from 'react';
import {
    View,
    Text
} from 'react-native';

import TouchableWord from '../components/ToucableWord'
import UntouchableWord from '../components/UntouchableWord'

export default function DefinitionItem(props) {
    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={{ color: '#1a0dab', fontSize: 18 }}>{props.item.definition}</Text>

            {props.item.partOfSpeech &&
                <Text style={{ color: '#006621', fontSize: 12 }}>PartOfSpeech : {props.item.partOfSpeech}</Text>
            }

            <Text style={{ fontSize: 12 }}>( click a single word to get more definitions)</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {props.item.inCategory &&
                    <TouchableWord item={props.item.inCategory} title={'In Category'} />}
                {props.item.typeOf &&
                    <TouchableWord item={props.item.typeOf} title={'Type Of'} />}
                {props.item.hasTypes &&
                    <TouchableWord item={props.item.hasTypes} title={'Has Type'} />}
                {props.item.synonyms &&
                    <TouchableWord item={props.item.synonyms} title={'Synonyms'} />}
                {props.item.antonyms &&
                    <TouchableWord item={props.item.antonyms} title={'Antonyms'} />}
                {props.item.examples &&
                    <UntouchableWord item={props.item.examples} title={'Examples'} />}
            </View>
        </View>
    )
}