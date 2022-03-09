import { StyleSheet, Text, } from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../types';
import { format } from 'date-fns';
import ContentWithImageBackground from '../components/ContentWithImageBackground';
import ContentInformation from '../components/ContentInformation';
const EventScreen = ({
  route,
  navigation
}: RootStackScreenProps<'Event'>) => {
  const [event] = useState(route.params?.event)

  const date = format(new Date(event.timestamp), "yyyy-MM-dd")
  const time = format(new Date(event.timestamp), "hh");

  const onHeartPress = () => {

  }
  return (
    <ContentWithImageBackground
      onGoBack={() => navigation.pop()}
      image={{ uri: event.image }}>
      <ContentInformation
        title={event.name}
        descriptionText={event.description}
        onPress={onHeartPress}
        metadata={[
          <Text key={"date"} style={[styles.dateText]}>
            {date}
          </Text>,
          <Text key={"time"} style={[styles.timeText]}>
            {time}
          </Text>
        ]}
      />
    </ContentWithImageBackground>

  )
}

export default EventScreen

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    paddingRight: 10,
    color: "#A64138"
  },
  timeText: {
    fontSize: 18,
    color: "#A64138"
  },
})