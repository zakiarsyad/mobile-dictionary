import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default function ImageItem(props) {
    return (
        <View style={{ marginBottom: 15, flexDirection: 'column' }}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: props.item.previewURL }}/>
        </View>
    )
}