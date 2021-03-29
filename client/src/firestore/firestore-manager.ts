import firestore from '@react-native-firebase/firestore';

import AuthManager from '../auth/auth-manager';

export function getValues() {
    if (AuthManager.user) {
        return firestore().collection("users").doc(AuthManager.user.uid).get();
    }
}

export async function setValues(steps: Number, money: Number) {
    const exists = (await firestore().collection("users").doc(AuthManager.user?.uid).get()).exists;

    if (AuthManager.user) {
        if (exists) {
            firestore().collection("users").doc(AuthManager.user?.uid).update({
                steps: steps,
                money: money,
                timestamp: firestore.Timestamp.now(),
            });
        } else {
            firestore().collection("users").doc(AuthManager.user?.uid).set({
                steps: steps,
                money: money,
                timestamp: firestore.Timestamp.now(),
            });
        }
    }
}