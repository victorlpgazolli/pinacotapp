import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const mock = [
    { name: "Musica" },
    { name: "Historia" },
    { name: "Arte" },
    { name: "Workshop" },
    { name: "Apresentação" },
]
const HorizontalCategories = ({
    categories = mock,
    onPressCategory = () => { }
}) => {
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            style={[styles.list]}
            keyExtractor={(item) => item?.name}
            renderItem={
                ({ item: category, index }) =>
                    <Pressable
                        key={category.name}
                        style={[
                            styles.category,
                            category.selected
                                ? styles.categoryPressed
                                : styles.categoryReleased
                        ]}
                        onPress={() => onPressCategory(category)}
                    >
                        <Text
                            numberOfLines={1}
                        >{category.name}</Text>
                    </Pressable>
            }
            data={categories}
        />
    )
}

export default HorizontalCategories

const styles = StyleSheet.create({
    list: {
        minHeight: 40,
        maxHeight: 40,
    },
    category: {
        marginRight: 12,
        paddingHorizontal: 13,
        paddingVertical: 6,
        borderRadius: 20,
        borderColor: Colors.light.tabIconSelected,
        borderWidth: 2,
        maxWidth: 200,
        justifyContent: "center"
    },
    categoryPressed: {
        backgroundColor: Colors.light.tabIconSelected,
        color: "#fff",
    },
    categoryReleased: {
        backgroundColor: "#ffffff00",
        color: Colors.light.tabIconSelected,
    }
})