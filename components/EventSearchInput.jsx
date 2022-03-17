import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import HorizontalCategories from './HorizontalCategories';
import { useSelector } from 'react-redux';
import { categoriesSelector } from '../store/features/events/selectors';

const EventSearchInput = ({
    onSearch,
    onPressCategory,
}) => {
    const categories = useSelector(categoriesSelector)
    return (
        <View
            style={[
                styles.body
            ]}>
            <Feather
                name="search"
                size={30}
                color={"#00000040"}
                style={[styles.searchIcon]}
            />
            <TextInput
                placeholder='Pesquisar'
                onChangeText={onSearch}
                style={[
                    styles.input
                ]}
            />
            <HorizontalCategories
                onPressCategory={onPressCategory}
                categories={categories}
            />
        </View>
    )
}

export default EventSearchInput

const styles = StyleSheet.create({
    body: {
        position: "relative",
        flexDirection: "column"
    },
    input: {
        margin: 20,
        minHeight: 50,
        paddingLeft: 50,
        borderWidth: 2,
        borderColor: "#00000040",
        borderRadius: 30
    },
    searchIcon: {
        position: "absolute",
        left: 30,
        top: 30
    }
})