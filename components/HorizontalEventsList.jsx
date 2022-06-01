import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, } from 'react-native';
import { useEventsActions, useSavedEvents } from '../hooks/useEvents';
import SmallCard from './SmallCard';


export default function HorizontalEventsList({
    events = [],
}) {

    const {
        savedEventsByName
    } = useSavedEvents();

    const {
        saveEvent
    } = useEventsActions();

    const navigator = useNavigation()
    const onPressEvent = (event) => {
        navigator.navigate("Event", { event })
    }

    const onPressHeart = (event) => {
        saveEvent(event)
    }
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            style={[styles.horizontalView]}
            keyExtractor={(item) => item?.name}
            renderItem={
                ({ item: event, index }) =>
                    <SmallCard
                        onPressCard={() => onPressEvent(event)}
                        onPressHeart={() => onPressHeart(event)}
                        isEventSaved={!!savedEventsByName[event.name]}
                        {...event} />
            }
            data={events}
        />
    );
}

const styles = StyleSheet.create({
    horizontalView: {
        minHeight: 300,
        maxHeight: 300,
    }
});
