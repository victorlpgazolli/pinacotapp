import { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import BigCard from '../components/BigCard';
import { View } from '../components/Themed';
import { useEvents } from '../hooks/useEvents';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const {
    events,
    getEvents
  } = useEvents();

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        renderItem={({ item: event, index }) => <BigCard
          key={index}
          name={event.name}
          timestamp={event.timestamp}
          imageUrl={event.image}
          onPress={() => navigation.push("Event", { event })}
        />}
        style={{ padding: 18, }}
        data={events}
        keyExtractor={(item) => item.name}
        ListFooterComponent={<View
          style={{
            height: 120,
            backgroundColor: "#fff"
          }}
        />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
