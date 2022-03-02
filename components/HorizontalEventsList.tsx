import { FlatList, StyleSheet, } from 'react-native';
import SmallCard from './SmallCard';


export default function HorizontalEventsList({
    events = [],
}: {
    events: Array<any>
}) {
    const onPressEvent = () => {

    }
    const onPressHeart = () => {

    }
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            style={[styles.horizontalView]}
            keyExtractor={(item) => item?.name}
            renderItem={
                ({ item, index }) =>
                    <SmallCard
                        onPressCard={onPressEvent}
                        onPressHeart={onPressHeart}
                        {...item} />
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
