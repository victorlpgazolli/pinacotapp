import React, { useMemo } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import HorizontalEventsList from '../components/HorizontalEventsList'
import EventSearchInput from '../components/EventSearchInput'
import { useEventsPerFilter } from '../hooks/useEvents'
import { getEventsPerCategory } from '../helpers/parser'

const SeachScreen = () => {

    const {
        events,
        onTextSearch,
        onCategorySearch,
        categoryNameSelected
    } = useEventsPerFilter();

    const eventsPerCategory = useMemo(
        () => {
            const eventsPerCategory = getEventsPerCategory(events);
            const listWhenFilter = {
                [categoryNameSelected]: eventsPerCategory[categoryNameSelected],
            }
            return categoryNameSelected
                ? listWhenFilter
                : eventsPerCategory
        },
        [events, categoryNameSelected]
    )

    return (
        <SafeAreaView>
            <EventSearchInput
                onSearch={onTextSearch}
                onPressCategory={onCategorySearch}
            />
            <ScrollView
                contentContainerStyle={[styles.body]}>
                {
                    Object.entries(eventsPerCategory).map(([category, eventsFromCategory]) => (
                        <View
                            key={category}
                            style={[styles.contentCard]}>
                            <Text style={[styles.title]}>
                                {category}
                            </Text>
                            <HorizontalEventsList
                                events={eventsFromCategory}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default SeachScreen

const styles = StyleSheet.create({
    body: {
        flexDirection: "column",
        paddingBottom: 120,
    },
    contentCard: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 20,
    },
    horizontalView: {
        minHeight: 300,
        maxHeight: 300,
    }
})