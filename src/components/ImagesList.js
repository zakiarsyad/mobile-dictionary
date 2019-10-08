import React from 'react';
import {
    Image,
    View,
    ScrollView
} from 'react-native';
import { useSelector } from 'react-redux'

export default function ImagesList() {
    const images = useSelector(state => state.images)

    return (
        <ScrollView style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginBottom: 30 }}>
                {images.map(el => {
                    return (
                        <Image
                            style={{ width: 100, height: 100, margin: 3 }}
                            source={{ uri: el.previewURL }}
                            key={el.previewURL}/>
                    )
                })}
            </View>
        </ScrollView>
    )
}