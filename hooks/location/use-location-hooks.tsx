import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { calculateRegion } from "../../utils/calculate-region";

export default function useLocation() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            setLocation(calculateRegion(location.coords));
        })();
    }, []);

    return {
        errorMsg,
        location,
        setLocation
    }
}