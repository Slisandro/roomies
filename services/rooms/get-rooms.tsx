import { RoomPost } from "../../models/post-room-model";

export const serviceGetRooms = (): RoomPost[] => {
    return [
        {
            "lon": -60.32974737646605,
            "lat": -36.91621360789941,
            "id": "9876543211",
            "title": "Room 1",
            "description": "Big room with all accommodations",
            "date": ""
        },
        {
            "lon": -60.28974737646605,
            "lat": -36.91621364780041,
            "id": "1234567892",
            "title": "Room 2",
            "description": "Big room with all accommodations",
            "date": ""
        },
    ];
}