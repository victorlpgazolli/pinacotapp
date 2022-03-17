/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import EventScreen from '../screens/EventScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedEventsScreen from '../screens/SavedEventsScreen';
import SeachScreen from '../screens/SeachScreen';
import EventsScreen from '../screens/EventsScreen';
import LinkingConfiguration from './LinkingConfiguration';
import { useIsSigninIn } from '../hooks/useAuth';

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Event" component={EventScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName={"LoginScreen"}
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarStyle: {
          marginBottom: 30,
          marginHorizontal: 28,
          position: "absolute",
          borderRadius: 17,
          height: 70,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        tabBarItemStyle: {
          borderRadius: 17,
        }
      }}>
      <BottomTab.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={({ navigation }) => ({
          title: 'Tab One',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) =>
            <Feather
              name="grid"
              size={30}
              color={color}
              style={{ marginRight: 15 }}
            />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="SearchScreen"
        component={SeachScreen}
        options={{
          title: 'Tab Two',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Feather
              name="search"
              size={30}
              color={color}
              style={{ marginRight: 15 }}
            />,
        }}
      />
      <BottomTab.Screen
        name="SavedEventsScreen"
        component={SavedEventsScreen}
        options={{
          title: 'Tab Three',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Feather
              name="heart"
              size={30}
              color={color}
              style={{ marginRight: 15 }}
            />,
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Tab Four',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Feather
              name="user"
              size={30}
              color={color}
              style={{ marginRight: 15 }}
            />,
        }}
      />
    </BottomTab.Navigator>
  );
}
