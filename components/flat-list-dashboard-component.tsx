import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { PopularRoom } from '../models/popular-room';
import { distanceTwoPoints } from '../utils/distance-two-points';
import FlatListComponent from './flat-list-component';
import ItemPopularRoomFlatListComponent from './item-popular-room-flat-list-component';

function FlatListDashboardComponent(
    { popularRooms, onPressRoom, location }:
        {
            location: { latitude: number, longitude: number },
            popularRooms: PopularRoom[],
            onPressRoom: (lat: number, lon: number) => void;
        }
) {
    return (
        <FlatListComponent
            data={popularRooms}
            renderItem={({ item }) => {
                const distance = distanceTwoPoints({
                    lon: item.lon,
                    lat: item.lat
                }, {
                    lon: location.longitude,
                    lat: location.latitude
                }).toFixed(1);
                return (
                    <TouchableOpacity
                        onPress={() => onPressRoom(item.lat, item.lon)}
                        style={{ }}
                    >
                        <ItemPopularRoomFlatListComponent item={item} distance={distance} />
                    </TouchableOpacity>
                )
            }}
            style={{ marginHorizontal: 20, paddingVertical: 10 }}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 25 }} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default FlatListDashboardComponent