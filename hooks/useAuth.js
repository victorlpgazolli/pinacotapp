import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../services/google";
import { saveUser } from "../store/features/user";
import { userInfoSelector } from "../store/features/user/selectors/user";


export const useIsSigninIn = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const getCurrentUserIfSignedIn = async () => {
        const isUserSignedIn = await authActions.isSignedIn();
        setIsSignedIn(!!isUserSignedIn);
    };

    useEffect(() => {
        getCurrentUserIfSignedIn()
    }, []);


    return isSignedIn;
}


export const useAuth = () => {

    const dispatch = useDispatch();

    const [isSigninInProgress, setSigninInProgress] = useState(false);
    const userInfo = useSelector(userInfoSelector);

    const signInUser = useCallback(async () => {
        setSigninInProgress(true)
        try {
            const user = await authActions.login();
            dispatch(saveUser(user))
        } catch (error) {
            console.log(error);
        } finally {
            setSigninInProgress(false)
        }
    }, []);

    const signOutUser = useCallback(async () => {
        await authActions.signOut();
        dispatch(saveUser(null))
    }, []);

    return {
        isSigninInProgress,
        userInfo,
        signInUser,
        signOutUser
    }
}