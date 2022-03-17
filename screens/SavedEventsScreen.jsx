import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalEventsList from '../components/HorizontalEventsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEventsByPeriod } from '../hooks/useEvents';

const SavedEventsScreen = () => {
    const {
        events,
    } = useEventsByPeriod({ eventSavedIsAFilter: true });
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={[styles.body]}>
                {
                    events.currentWeek &&
                    <View style={[styles.contentCard]}>
                        <Text style={[styles.title]}>
                                Esta Semana
                            </Text>
                            <HorizontalEventsList
                                events={events.currentWeek}
                            />
                        </View>
                }
                {
                    events.lastWeek &&
                    <View style={[styles.contentCard]}>
                        <Text style={[styles.title]}>
                                Ultimas Semanas
                            </Text>
                            <HorizontalEventsList
                                events={events.lastWeek}
                            />
                        </View>
                }
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