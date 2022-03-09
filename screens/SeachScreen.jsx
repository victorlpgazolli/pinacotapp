import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HorizontalEventsList from '../components/HorizontalEventsList'
import useEvents from '../hooks/useEvents'
import { Feather } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import HorizontalCategories from '../components/HorizontalCategories'
import useDebounce from '../hooks/useDebounce'
import EventSearchInput from '../components/EventSearchInput'

const SeachScreen = () => {
    const {
        events,
    } = useEvents();
    const [textSearched, setTextSearched] = useState(null)

    return (
        <SafeAreaView>
            <EventSearchInput
                onChangeText={setTextSearched}
                onPressCategory={console.log}
            />
            <ScrollView
                contentContainerStyle={[styles.body]}>
                <View style={[styles.contentCard]}>
                    <Text style={[styles.title]}>
                        Esta semana
                    </Text>
                    <HorizontalEventsList
                        events={events}
                    />
                </View>
                <View style={[styles.contentCard]}>
                    <Text style={[styles.title]}>
                        Semana passada
                    </Text>
                    <HorizontalEventsList
                        events={events}
                    />
                </View>
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