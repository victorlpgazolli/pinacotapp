import React from 'react'
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';

const userImageWidth = 150
const ContentWithImageBackground = ({
    image,
    children,
    onGoBack,
    customImage,
}) => {
    const {
        height,
        width
    } = useWindowDimensions();
    console.log(customImage);
    return (
        <SafeAreaView style={[styles.flex]}>

            <View style={[styles.flex]}>
                <Image source={image}
                    style={{
                        height: (height / 2) + 40,
                        width: "100%",
                    }} />
                {
                    customImage &&
                    <Image source={customImage}
                        style={{
                            height: userImageWidth,
                            width: userImageWidth,
                            position: "absolute",
                            left: (width / 2) - userImageWidth / 2,
                            top: (width / 2) - userImageWidth / 2,
                            borderRadius: 30
                        }} />
                }
                {
                    onGoBack &&
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            top: 15,
                            left: 10
                        }}
                        onPress={onGoBack}
                    >
                        <MaterialIcons
                            name="arrow-back-ios"
                            size={30}
                            color={"#fff"}
                            style={{ marginLeft: 15 }}
                        />
                    </TouchableOpacity>
                }
            </View>
            <View style={[styles.body]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default ContentWithImageBackground

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingVertical: 32,
        paddingHorizontal: 30,
        flexDirection: "column"
    },
    flex: {
        flex: 1,
    }
})