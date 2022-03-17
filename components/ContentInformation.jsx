import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const ContentInformation = ({
    title,
    metadata = "",
    descriptionTitle = "Descrição",
    descriptionText = "",
    isEventSaved = false,
    onPress
}) => {
    return (
        <>
            <View
                style={[styles.content]}>
                <View style={[styles.titleView]}>
                    <Text style={[styles.titleText]}
                        numberOfLines={3}

                    >
                        {title}
                    </Text>
                </View>
                {
                    onPress &&
                    <View
                        style={[styles.actionView]}>
                        <TouchableOpacity
                            onPress={onPress}

                        >
                                {
                                    isEventSaved
                                        ? <AntDesign
                                            name="heart"
                                            size={30}
                                            color={"#A64138"}
                                        />
                                        : <AntDesign
                                            name="hearto"
                                            size={30}
                                            color={"#A64138"}
                                        />
                                }
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View
                style={[styles.dateView]}>
                <Text style={[styles.dateText]}>
                    {metadata}
                </Text>
            </View>
            <View
                style={[styles.descriptionViewHeader]}>
                <Text style={[styles.descriptionTextHeader]}>
                    {descriptionTitle}
                </Text>

            </View>
            <View
                style={[styles.descriptionViewContent]}>
                <Text style={[styles.descriptionTextContent]}>
                    {descriptionText}
                </Text>

            </View>
        </>
    )
}

export default ContentInformation

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    actionView: {
        minWidth: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    titleView: {
        flex: 1
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    dateView: {
        flexDirection: "row",
        paddingVertical: 14
    },
    dateText: {
        fontSize: 18,
        paddingRight: 10,
        color: "#A64138"
    },
    timeText: {
        fontSize: 18,
        color: "#A64138"
    },
    descriptionViewHeader: {
        flexDirection: "row",
        paddingTop: 30
    },
    descriptionTextHeader: {
        fontSize: 20,
        fontWeight: "bold"
    },
    descriptionViewContent: {
        flexDirection: "row",
    },
    descriptionTextContent: {
        fontSize: 18,
        paddingRight: 10
    },
})