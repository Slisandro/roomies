import { PopularRoom } from "../../models/popular-room";

export const serviceGetPopularRooms = (): PopularRoom[] => {
    return [
        {
            lon: -60.32974737646605,
            lat: -36.91621360789941,
            id: "9876543211",
            title: "Room 1",
            description: "Big room with all accommodations",
            date: "",
            media: ["https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D&w=1000&q=80"],
            likes: 15
        },
        {
            lon: -60.28974737646605,
            lat: -36.91621364780041,
            id: "1234567892",
            title: "Room 2",
            description: "Big room with all accommodations",
            date: "",
            media: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxOANWsrTGXxJVS3E_FczGRSqksFh3wRBQSfvI1qa&s"],
            likes: 5
        },
        {
            lon: -60.32974737646605,
            lat: -36.91621360789941,
            id: "9876543213",
            title: "Room 1",
            description: "Big room with all accommodations",
            date: "",
            media: ["https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D&w=1000&q=80"],
            likes: 15
        },
        {
            lon: -60.28974737646605,
            lat: -36.91621364780041,
            id: "1234567895",
            title: "Room 2",
            description: "Big room with all accommodations",
            date: "",
            media: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxOANWsrTGXxJVS3E_FczGRSqksFh3wRBQSfvI1qa&s"],
            likes: 5
        },
    ];
}