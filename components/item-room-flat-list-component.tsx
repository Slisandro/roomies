import React from 'react';
import { Image, Text, View } from 'react-native';
import { RoomPost } from '../models/post-room-model';

function ItemFlatListComponent({ item, distance }: { item: RoomPost, distance: string }) {
    return (
        <View style={{ backgroundColor: "#00000075", padding: 15, borderRadius: 10, display: "flex", flexDirection: "row", gap: 15 }}>
            <Image source={{ uri: item.media[0] }} width={75} height={75} borderRadius={10} />
            <View style={{ display: "flex", gap: 5 }}>
                <Text style={{ color: "#fff" }}>{item.title}</Text>
                <Text style={{ color: "#ffffff75", width: 125 }}>{item.description}</Text>
                <Text style={{ color: "#ffffff95" }}>
                    A {distance} km
                </Text>
            </View>
        </View>
    )
}

export default ItemFlatListComponent