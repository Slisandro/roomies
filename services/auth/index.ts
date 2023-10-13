import { Auth, UserCredential, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from 'toastify-react-native';
import { AUTH_ERROR } from "../../constants/auth/error-auth";
import { AUTH_SUCCESS } from "../../constants/auth/success-auth";
import auth from "../../firebase/auth";
import { User } from "../../models/user-model";

const AUTH: Auth = auth;

export interface ResponseService {
    error: boolean,
    message?: string,
    code?: number;
    data?: UserCredential
}

export const serviceLogin:
    (e: string, p: string) => Promise<ResponseService>
    = async (email: string, password: string) =>
        signInWithEmailAndPassword(AUTH, email, password)
            .then(r => {
                Toast.success(AUTH_SUCCESS["auth/login"]);
                return { data: r, error: false };
            })
            .catch(u => {
                Toast.error(AUTH_ERROR[u.code]);
                return { error: true, message: AUTH_ERROR[u.code], code: u.code }
            });

export const serviceRegister:
    (u: User) => Promise<ResponseService>
    = async (u: User) =>
        createUserWithEmailAndPassword(AUTH, u.email, u.password)
            .then(async r => {
                const userCreated = getAuth();

                await userCreated.updateCurrentUser({
                    ...userCreated.currentUser,
                    photoURL: u?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
                    displayName: u.displayName
                })
                    .then(r => console.log({ r }))
                    .catch(e => console.log({ e }))

                Toast.success(AUTH_SUCCESS["auth/register"]);

                return { data: r, error: false }
            })
            .catch(u => {
                Toast.error(AUTH_ERROR[u.code]);
                return { error: true, message: AUTH_ERROR[u.code], code: u.code }
            })

export const serviceResetPassword:
    (e: string) => void
    = async (email: string) =>
        sendPasswordResetEmail(AUTH, email)
            .then(() => Toast.success(AUTH_SUCCESS["auth/reset-password"]))
            .catch(u => Toast.success(AUTH_SUCCESS[u.code]));