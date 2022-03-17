import React, { useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GoogleSignInConfigure = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "319774002318-s7if4u37mp2mci9n2gj0kle450u13uq8.apps.googleusercontent.com",
            scopes: [
                "https://www.googleapis.com/auth/userinfo.profile"
            ]
        })
    }, [])

    return (<></>)
}

export default GoogleSignInConfigure