import { Auth, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from 'toastify-react-native';
import { AUTH_ERROR } from "../../constants/auth/error-auth";
import { AUTH_SUCCESS } from "../../constants/auth/success-auth";
import auth from "../../firebase/auth";
import { User } from "../../models/user-model";

const AUTH: Auth = auth;

export const serviceLogin = async (email: string, password: string) => {
    return signInWithEmailAndPassword(AUTH, email, password)
        .then(r => {
            Toast.success(AUTH_SUCCESS["auth/login"])
            return r
        })
        .catch(u => Toast.error(AUTH_ERROR[u.code]));
    // spinner
    // .finally()
};

export const serviceRegister = async (u: User) => {
    const { email, password, photoURL, displayName } = u;
    return createUserWithEmailAndPassword(AUTH, email, password)
        .then(async r => {
            const userCreated = getAuth();

            await userCreated.updateCurrentUser({
                ...userCreated.currentUser,
                photoURL,
                displayName
            });

            return r
        })
        .catch(e => console.log(e))
};

export const serviceResetPassword = async (email: string) => {
    try {
        const r = await sendPasswordResetEmail(AUTH, email);
        console.log(r);
    } catch (e) {
        console.log(e);
    }
};