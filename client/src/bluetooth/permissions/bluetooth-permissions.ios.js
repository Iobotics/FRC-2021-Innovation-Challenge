import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const LOCATION = PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL;

export default async () => {
    if (check(LOCATION)) {
        try {
            const granted = await request(
                LOCATION,
                {
                    title: 'Bluetooth Access',
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