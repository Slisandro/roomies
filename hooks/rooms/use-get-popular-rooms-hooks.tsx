import { useEffect, useState } from "react"
import { PopularRoom } from "../../models/popular-room"
import { serviceGetPopularRooms } from "../../services/rooms/get-popular.rooms"

export default function useGetPopularRooms () {
    const [popularRooms, setPopularRooms] = useState<PopularRoom[]>()

    useEffect(() => {
        const response = serviceGetPopularRooms();
        setPopularRooms(response)
    }, [])

    return {
        popularRooms
    }
}