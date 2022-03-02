import { format } from 'date-fns';
import { ImageBackground, StyleSheet, TouchableOpacity, } from 'react-native';

import { Text, View } from './Themed';

export default function BigCard({
    name = "Nome",
    timestamp = "20h",
    imageUrl = "https://reactjs.org/logo-og.png",
    onPress,
}: {
    name: string
    timestamp: string
    imageUrl: string
    onPress: any
}) {

    const date = format(new Date(timestamp), "yyyy-MM-dd")
    const time = format(new Date(timestamp), "hh")
    return (

        <ImageBackground
            source={{ uri: imageUrl }}
            resizeMode="cover"
            borderRadius={30}
            imageStyle={{
                borderRadius: 30
            }}
            style={[styles.background, {
                width: '100%', height: '100%',
            }]}
        >
            <TouchableOpacity
                onPress={onPress}
                style={[styles.touchable]}>

                <View style={[styles.imageSpace]}>
                    <View
                        style={[styles.informations]}>
                        <Text
                            style={[styles.title]}>
                            {name}
                        </Text>
                        <View
                            style={[styles.dateAndTime]}>
                            <Text
                                style={[styles.date]}>
                                {date}
                            </Text>
                            <Text
                                style={[styles.date]}>
                                {time}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "transparent",
        minHeight: 450,
        maxHeight: 450,
        marginBottom: 20,
    },
    touchable: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    imageSpace: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-end',
        backgroundColor: "transparent",
    },
    informations: {
        alignItems: 'flex-start',
        flexDirection: "column",
        padding: 10,
        backgroundColor: "transparent",

    },
    dateAndTime: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: "transparent",

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff"
    },
    date: {
        paddingRight: 10,
        color: "#fff"
    },
});
