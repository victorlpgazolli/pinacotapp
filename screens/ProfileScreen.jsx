import React from 'react'
import { StyleSheet, } from 'react-native'

import defaultImageBackground from '../assets/images/background-user.png';
import ContentWithImageBackground from '../components/ContentWithImageBackground';
import ContentInformation from '../components/ContentInformation';
import { useSelector } from 'react-redux';
import { displayNameSelector, userInfoSelector } from '../store/features/user/selectors/user';

const ProfileScreen = () => {
    const userInfo = useSelector(userInfoSelector);
    const displayName = useSelector(displayNameSelector);

    return (
        <ContentWithImageBackground
            image={defaultImageBackground}
            customImage={{ uri: userInfo?.photoURL }}
        >
            <ContentInformation
                title={displayName}
                descriptionTitle={"Sobre"}
                descriptionText={[
                    userInfo.email,
                    userInfo.phoneNumber
                ].filter(Boolean).join("\n")}
            />
        </ContentWithImageBackground>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})