import firestore from '@react-native-firebase/firestore';

import AuthManager from '../auth/auth-manager';

export function getValues() {
    if (AuthManager.user) {
        return firestore().collection(AuthManager.user.uid).orderBy('timestamp', 'desc').get()
    }
}

export function setValues(steps: Number, money: Number) {
    if (AuthManager.user) {
        firestore().collection(AuthManager.user.uid).add({
            steps: steps,
            money: money,
            timestamp: Date.now(),
        })
    }
}