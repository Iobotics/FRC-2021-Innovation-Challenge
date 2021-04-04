import firestore from '@react-native-firebase/firestore';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';

import AuthManager from '../auth/auth-manager';

export async function getValues() {
    if (AuthManager.user) {
        let doc = await firestore().collection("users").doc(AuthManager.user.uid).get();
        return Promise.resolve(doc);
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