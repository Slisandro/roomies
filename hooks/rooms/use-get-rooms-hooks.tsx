import { useEffect, useState } from "react"
import { RoomPost } from "../../models/post-room-model"
import { serviceGetRooms } from "../../services/rooms/get-rooms"

export default function useGetRooms () {
    const [rooms, setRooms] = useState<RoomPost[]>()

    useEffect(() => {
        const response = serviceGetRooms()
        setRooms(response)
    }, [])

    return {
        rooms
    }
}