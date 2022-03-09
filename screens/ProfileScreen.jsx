import React from 'react'
import { StyleSheet, } from 'react-native'

import defaultImageBackground from '../assets/images/background-user.png';
import ContentWithImageBackground from '../components/ContentWithImageBackground';
import ContentInformation from '../components/ContentInformation';

const ProfileScreen = () => {

    return (
        <ContentWithImageBackground image={defaultImageBackground}>
            <ContentInformation
                title={"Meu nome"}
                descriptionTitle={"Sobre"}
                descriptionText={"dasdasdsadsa"}
            />
        </ContentWithImageBackground>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})