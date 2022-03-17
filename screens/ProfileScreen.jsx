import React from 'react'
import { StyleSheet, } from 'react-native'

import defaultImageBackground from '../assets/images/background-user.png';
import ContentWithImageBackground from '../components/ContentWithImageBackground';
import ContentInformation from '../components/ContentInformation';
import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { displayNameSelector, photoUrlSelector, userInfoSelector } from '../store/features/user/selectors/user';

const ProfileScreen = () => {
    const displayName = useSelector(displayNameSelector);
    const photoUrl = useSelector(photoUrlSelector);

    return (
        <ContentWithImageBackground
            image={defaultImageBackground}
            customImage={{ uri: photoUrl }}
        >
            <ContentInformation
                title={displayName}
                descriptionTitle={"Sobre"}
                descriptionText={"dasdasdsadsa"}
            />
        </ContentWithImageBackground>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})