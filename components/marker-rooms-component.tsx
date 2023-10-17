import React from 'react'
import { Marker } from 'react-native-maps'
import { RoomPost } from '../models/post-room-model'

function MarkerRoomsComponent({ room }: { room: RoomPost }) {
    return (
        <Marker
            key={room.id}
            coordinate={{
                latitude: room.lat,
                longitude: room.lon
            }}
        />
    )
}

export default MarkerRoomsComponent