import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalEventsList from '../components/HorizontalEventsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEvents } from '../hooks/useEvents';

const SavedEventsScreen = () => {
    const {
        events,
    } = useEvents();
    return (
        <SafeAreaView>
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

export default SavedEventsScreen

const styles = StyleSheet.create({
    body: {
        flexDirection: "column",
        paddingBottom: 120
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