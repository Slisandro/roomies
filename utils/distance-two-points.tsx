export const distanceTwoPoints =
    (point1: { lat: number, lon: number }, point2: { lat: number, lon: number }) => {
        const R = 6371; // radio de la Tierra en kilómetros
        const φ1 = point1.lat * Math.PI / 180; // latitud 1 en radianes
        const φ2 = point2.lat * Math.PI / 180; // latitud 2 en radianes
        const Δφ = φ2 - φ1; // diferencia de latitud en radianes
        const Δλ = (point2.lon - point1.lon) * Math.PI / 180; // diferencia de longitud en radianes

        // fórmula de Haversine
        const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }