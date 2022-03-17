import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../constants/Colors'

const prepareCategories = name => ({
    name,
    selected: false
})
const mock = [
    "Musica",
    "Historia",
    "Arte",
    "Workshop",
    "Apresentação",
]
const HorizontalCategories = ({
    categories = mock,
    onPressCategory = () => { }
}) => {
    const [categoriesList, setCategories] = useState([]);

    useEffect(() => {

        const categoriesWithProps = categories.map(prepareCategories);
        setCategories(categoriesWithProps);

    }, [categories]);

    const onSelectCategory = (categoryName) => {

        const categoryIndex = categoriesList.findIndex(category => category.name === categoryName);

        const newCategoriesList = [...categories].map(prepareCategories)

        const [oldCategory] = [...categoriesList].splice(categoryIndex, 1);

        const newCategory = {
            name: categoryName,
            selected: !oldCategory.selected,
        }
        onPressCategory(
            newCategory.selected
                ? categoryName
                : ""
        );

        newCategoriesList.splice(categoryIndex, 1, newCategory);

        setCategories(newCategoriesList)
    }

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
                        onPress={() => {
                            onSelectCategory(category.name);
                        }}
                    >
                        <Text
                            style={category.selected
                                ? styles.categoryPressed
                                : styles.categoryReleased}
                            numberOfLines={1}
                        >{category.name}</Text>
                    </Pressable>
            }
            data={categoriesList}
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