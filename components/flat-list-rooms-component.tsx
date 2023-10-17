import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import useLocation from '../hooks/location/use-location-hooks';
import { RoomPost } from '../models/post-room-model';
import { distanceTwoPoints } from '../utils/distance-two-points';
import ItemFlatListComponent from './item-flat-list-component';

function FlatListRoomsComponent(
    { rooms, onPressRoom, location } :
        {
            location: { latitude: number, longitude: number },
            rooms: RoomPost[],
            onPressRoom: (lat: number, lon: number) => void;
        }
) {
    return (
        <FlatList
            data={rooms}
            renderItem={({ item }) => {
                const distance = distanceTwoPoints({
                    lon: item.lon,
                    lat: item.lat
                }, {
                    lon: location.longitude,
                    lat: location.latitude
                }).toFixed(1);
                return (
                    <TouchableOpacity onPress={() => onPressRoom(item.lat, item.lon)}>
                        <ItemFlatListComponent item={item} distance={distance} />
                    </TouchableOpacity>
                )
            }}
            style={{ position: "absolute", bottom: 40, marginHorizontal: 20, paddingVertical: 10 }}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 25 }} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default FlatListRoomsComponent