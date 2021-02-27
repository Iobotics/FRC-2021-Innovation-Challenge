import { PermissionsAndroid } from 'react-native';

export default async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location Access',
                message: "This permission is required to use bluetooth on your device."
            }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Granted!");
        } else {
            console.log("Declined.");
        }
        
    } catch(err) {
        console.warn(err);
    }
}