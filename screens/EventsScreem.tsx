import { useEffect } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import useEvents from '../hooks/useEvents';
import { spreadsheetApi } from '../services/api';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const {
    events,
  } = useEvents();


  return (
    <FlatList
      renderItem={({ item: event, index }) => <Card
        key={index}
        name={event.name}
        timestamp={event.timestamp}
        imageUrl={event.image}
        onPress={() => navigation.push("Event", { event })}
      />}
      style={styles.container}
      data={events}
      keyExtractor={(item, index) => index}
      ListFooterComponent={<View
        style={{
          height: 118
        }}
      />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 18,
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
