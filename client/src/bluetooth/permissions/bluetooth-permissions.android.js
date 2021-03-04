import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const LOCATION = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export default async () => {
    const current = await check(LOCATION);
    if (current !== RESULTS.GRANTED) {
        try {
            const granted = await request(
                LOCATION,
                {
                    title: 'Location Access',
                    message: "This permission is required to use bluetooth on your device."
                }
            );

            if (granted === RESULTS.GRANTED) {
                console.log("Granted!");
            } else {
                console.log("Declined.");
            }   
        
        } catch(err) {
            console.warn(err);
        }
    }
}