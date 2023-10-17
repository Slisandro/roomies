export function calculateRegion(location: { longitude: number, latitude: number }) {
    const latitudeDelta = 0.09;
    const longitudeDelta = 0.01;

    return {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta,
        longitudeDelta
    };
}