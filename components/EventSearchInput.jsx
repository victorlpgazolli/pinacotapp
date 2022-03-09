import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import useDebounce from '../hooks/useDebounce';
import { Feather } from '@expo/vector-icons';
import HorizontalCategories from './HorizontalCategories';

const EventSearchInput = ({
    onChangeText,
    onPressCategory,
}) => {
    const onSearch = useDebounce(onChangeText, 1000);
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