import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const loginWithGoogle = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

const login = (loginType = "google") => {
    const loginTypesAvailable = {
        [loginType]: async () => { },
        google: loginWithGoogle
    }
    return loginTypesAvailable[loginType]()
}

export const authActions = {
    isSignedIn: GoogleSignin.isSignedIn,
    getCurrentUser: GoogleSignin.getCurrentUser,
    signOut: GoogleSignin.signOut,
    login,
};
