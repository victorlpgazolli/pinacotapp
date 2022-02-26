import { Image, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../types';
import { format } from 'date-fns';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const EventScreen = ({
  route,
  navigation
}: RootStackScreenProps<'Event'>) => {
  const [event] = useState(route.params?.event)

  const { height } = useWindowDimensions()
  const date = format(new Date(event.timestamp), "yyyy-MM-dd")
  const time = format(new Date(event.timestamp), "hh")
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>

      <View style={{
        flex: 1,
      }}>
        <Image source={{ uri: event.image }}
          style={{
            height: (height / 2) + 40,
            width: "100%",
          }} />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 15,
            left: 10
          }}
          onPress={() => navigation.pop()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            color={"#fff"}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: "#fff",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingVertical: 32,
        paddingHorizontal: 30,
        flexDirection: "column"
      }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
              numberOfLines={3}

            >
              {event.name}
            </Text>
          </View>
          <View
            style={{
              minWidth: 10,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <TouchableOpacity
              onPress={console.log}

            >
              <AntDesign
                name="hearto"
                size={30}
                color={"#A64138"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 14
          }}>
          <Text style={{
            fontSize: 18,
            paddingRight: 10,
            color: "#A64138"
          }}>
            {date}
          </Text>
          <Text style={{
            fontSize: 18,
            color: "#A64138"
          }}>
            {time}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 30
          }}>
          <Text style={{
            fontSize: 20,
            fontWeight: "bold"
          }}>
            Descrição
          </Text>

        </View>
        <View
          style={{
            flexDirection: "row",
          }}>
          <Text style={{
            fontSize: 18,
            paddingRight: 10
          }}>
            {event.description}
          </Text>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default EventScreen

const styles = StyleSheet.create({})