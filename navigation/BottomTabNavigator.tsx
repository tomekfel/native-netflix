import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import HomeScreen from "../screens/HomeScreen";
import ComingSoonScreen from "../screens/ComingSoonScreen";
import SearchScreen from "../screens/SearchScreen";
import DownloadsScreen from "../screens/DownloadsScreen";

import {
  BottomTabParamList,
  HomeParamList,
  ComingSoonParamList,
  SearchParamList,
  DownloadsParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={ComingSoonNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={DownloadsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home", headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ComingSoonStack = createStackNavigator<ComingSoonParamList>();

function ComingSoonNavigator() {
  return (
    <ComingSoonStack.Navigator>
      <ComingSoonStack.Screen
        name="ComingSoonScreen"
        component={ComingSoonScreen}
        options={{ headerTitle: "Coming Soon" }}
      />
    </ComingSoonStack.Navigator>
  );
}

const SearchSoonStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchSoonStack.Navigator>
      <SearchSoonStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: "Search" }}
      />
    </SearchSoonStack.Navigator>
  );
}

const DownloadsStack = createStackNavigator<DownloadsParamList>();

function DownloadsNavigator() {
  return (
    <DownloadsStack.Navigator>
      <DownloadsStack.Screen
        name="DownloadsScreen"
        component={DownloadsScreen}
        options={{ headerTitle: "Coming Soon" }}
      />
    </DownloadsStack.Navigator>
  );
}
