/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Event: NavigatorScreenParams<RootTabParamList> | undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  EventsScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  SearchScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  SavedEventsScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  ProfileScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  EventsScreen: undefined;
  SearchScreen: undefined;
  SavedEventsScreen: undefined;
  ProfileScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
