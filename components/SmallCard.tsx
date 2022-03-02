import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ImageBackground, StyleSheet, TouchableOpacity, } from 'react-native';

import { Text, View } from './Themed';

export default function SmallCard({
    name = "Nodbasdiasbdiabsdaime",
    timestamp = new Date().toISOString(),
    image = "https://reactjs.org/logo-og.png",
    onPressCard = console.log,
    onPressHeart = console.log,
}: {
    name: string
    timestamp: string
    image: string
    onPressCard: () => void
    onPressHeart: () => void
}) {

    const date = format(new Date(timestamp), "yyyy-MM-dd")
    const time = format(new Date(timestamp), "hh")
    return (

        <ImageBackground
            source={{ uri: image }}
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
                onPress={onPressCard}
                style={[styles.touchable]}>

                <View style={[styles.imageSpace]}>
                    <View
                        style={[styles.informations]}>
                        <Text
                            style={[styles.title]}
                            numberOfLines={1}
                        >
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
                            <TouchableOpacity
                                onPress={onPressHeart}

                            >
                                <AntDesign
                                    name="hearto"
                                    size={30}
                                    color={"#fff"}
                                />
                            </TouchableOpacity>
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
        minHeight: 300,
        maxHeight: 300,
        maxWidth: 180,
        minWidth: 180,
        marginRight: 15,
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
        backgroundColor: "transparent",

    },
    dateAndTime: {
        alignItems: 'center',
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
